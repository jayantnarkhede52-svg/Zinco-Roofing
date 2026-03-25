import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const [leads, setLeads] = useState([]);
    const [seoData, setSeoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('leads');
    const navigate = useNavigate();

    // SEO Form State
    const [seoForm, setSeoForm] = useState({ route: '/', title: '', description: '', keywords: '', focus_keyword: '' });
    const [isEditingSeo, setIsEditingSeo] = useState(false);
    const [seoMessage, setSeoMessage] = useState({ type: '', text: '' });
    
    // Advanced SEO Analysis State
    const [seoAnalysis, setSeoAnalysis] = useState({
        titleLen: 'red', descLen: 'red', kwInTitle: 'red', kwInDesc: 'red', density: { score: 'red', value: 0 }
    });
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const PREDEFINED_ROUTES = [
        '/', '/about', '/services', '/projects', '/areas', '/gallery', '/contact', '/cost-estimator',
        '/services/industrial-roof-leak-repair', '/services/peb-structure-fabrication', '/services/warehouse-roofing-solutions', '/services/metal-roof-installation',
        '/products/roofing-metal-sheets', '/products/insulated-sheets', '/products/pvc-upvc-sheets', '/products/polycarbonate-sheets'
    ];

    useEffect(() => {
        const checkAuthAndFetch = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            
            if (!session) {
                navigate('/admin/login');
                return;
            }

            try {
                // Fetch Leads
                const { data: leadsData, error: leadsError } = await supabase
                    .from('leads')
                    .select('*')
                    .order('created_at', { ascending: false });
                
                if (leadsError) throw leadsError;
                setLeads(leadsData || []);

                // Fetch SEO
                const { data: seoItems, error: seoError } = await supabase
                    .from('seo_metadata')
                    .select('*')
                    .order('route', { ascending: true });
                
                if (seoError) throw seoError;
                setSeoData(seoItems || []);

                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        checkAuthAndFetch();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                navigate('/admin/login');
            }
        });

        return () => subscription.unsubscribe();
    }, [navigate]);

    // Leads logic
    const updateStatus = async (id, newStatus) => {
        try {
            const { error: updateError } = await supabase
                .from('leads')
                .update({ status: newStatus })
                .eq('id', id);

            if (updateError) throw updateError;
            
            setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
        } catch (err) {
            console.error('Update failed:', err);
        }
    };

    // Advanced SEO Analysis Logic
    useEffect(() => {
        if (!seoForm.focus_keyword) {
            setSeoAnalysis(prev => ({ ...prev, titleLen: 'red', descLen: 'red', kwInTitle: 'red', kwInDesc: 'red' }));
            return;
        }

        const kw = seoForm.focus_keyword.toLowerCase().trim();
        const tLen = seoForm.title?.length || 0;
        const dLen = seoForm.description?.length || 0;
        
        setSeoAnalysis(prev => ({
            ...prev,
            titleLen: tLen >= 40 && tLen <= 60 ? 'green' : (tLen > 0 ? 'yellow' : 'red'),
            descLen: dLen >= 120 && dLen <= 160 ? 'green' : (dLen > 0 ? 'yellow' : 'red'),
            kwInTitle: seoForm.title?.toLowerCase().includes(kw) ? 'green' : 'red',
            kwInDesc: seoForm.description?.toLowerCase().includes(kw) ? 'green' : 'red'
        }));
    }, [seoForm.title, seoForm.description, seoForm.focus_keyword]);

    const analyzeKeywordDensity = async () => {
        if (!seoForm.route || !seoForm.focus_keyword) return;
        setIsAnalyzing(true);
        try {
            const url = seoForm.route === '/' ? window.location.origin : `${window.location.origin}${seoForm.route.startsWith('/') ? '' : '/'}${seoForm.route}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error('Fetch failed');
            const html = await res.text();
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const textContent = doc.body.innerText.replace(/\s+/g, ' ').toLowerCase();
            const words = textContent.split(/\s+/).filter(w => w.length > 0);
            
            const totalWords = words.length;
            if (totalWords === 0) throw new Error('No text');
            
            const kw = seoForm.focus_keyword.toLowerCase().trim();
            const kwWords = kw.split(/\s+/).length;
            const kwRegex = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            const occurrences = (textContent.match(kwRegex) || []).length;
            
            const densityValue = ((occurrences * kwWords / totalWords) * 100).toFixed(2);
            let score = 'red';
            if (densityValue >= 0.5 && densityValue <= 2.5) score = 'green';
            else if (densityValue > 0 && densityValue < 0.5) score = 'yellow';
            else if (densityValue > 2.5) score = 'yellow';
            
            setSeoAnalysis(prev => ({ ...prev, density: { score, value: densityValue } }));
        } catch (err) {
            setSeoAnalysis(prev => ({ ...prev, density: { score: 'red', value: 0 } }));
        }
        setIsAnalyzing(false);
    };

    // SEO Logic
    const handleSeoSubmit = async (e) => {
        e.preventDefault();
        try {
            const formRoute = seoForm.route.startsWith('/') ? seoForm.route : `/${seoForm.route}`;
            
            const { data: savedSeo, error: saveError } = await supabase
                .from('seo_metadata')
                .upsert({ 
                    ...seoForm, 
                    route: formRoute,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'route' })
                .select()
                .single();

            if (saveError) throw saveError;

            if (savedSeo) {
                // Update local list
                if (isEditingSeo) {
                    setSeoData(seoData.map(item => item.route === savedSeo.route ? savedSeo : item));
                } else {
                    setSeoData([...seoData.filter(i => i.route !== savedSeo.route), savedSeo]);
                }
                
                setSeoMessage({ type: 'success', text: 'SEO Data Saved Successfully!' });
                setSeoForm({ route: '/', title: '', description: '', keywords: '', focus_keyword: '' });
                setIsEditingSeo(false);
                setTimeout(() => setSeoMessage({ type: '', text: '' }), 3000);
            }
        } catch (err) {
            console.error(err);
            setSeoMessage({ type: 'error', text: err.message || 'Failed to save SEO data.' });
        }
    };

    const handleEditSeo = (item) => {
        setSeoForm({ focus_keyword: '', ...item });
        setIsEditingSeo(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteSeo = async (id) => {
        if (!window.confirm('Are you sure you want to delete this SEO entry?')) return;
        
        try {
            const { error: deleteError } = await supabase
                .from('seo_metadata')
                .delete()
                .eq('id', id);

            if (deleteError) throw deleteError;
            setSeoData(seoData.filter(item => item.id !== id));
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };

    const handleExportCsv = () => {
        try {
            let csv = 'Date,Name,Email,Phone,Area,Material,Status,Source,Message\n';
            
            leads.forEach(lead => {
                const date = new Date(lead.created_at).toLocaleDateString();
                const esc = (t) => t ? '"' + String(t).replace(/"/g, '""') + '"' : '""';
                csv += `${date},${esc(lead.name)},${esc(lead.email)},${esc(lead.phone)},${esc(lead.area)},${esc(lead.material)},${esc(lead.status)},${esc(lead.source)},${esc(lead.message)}\n`;
            });

            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `leads_export_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Export failed:', err);
        }
    };

    const handlePublishSeo = async () => {
        const deployHookUrl = import.meta.env.VITE_VERCEL_DEPLOY_HOOK;

        if (!deployHookUrl) {
            setSeoMessage({ type: 'error', text: 'Deploy hook not configured. Please add VITE_VERCEL_DEPLOY_HOOK to your environment variables.' });
            return;
        }

        try {
            const res = await fetch(deployHookUrl, { method: 'POST' });
            if (res.ok) {
                setSeoMessage({ type: 'success', text: 'Deployment triggered! Changes will be live in 1-2 minutes.' });
            } else {
                setSeoMessage({ type: 'error', text: 'Failed to trigger Vercel deployment.' });
            }
            setTimeout(() => setSeoMessage({ type: '', text: '' }), 6000);
        } catch (err) {
            setSeoMessage({ type: 'error', text: 'Error triggering deployment.' });
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) return <div className={styles.loading}>Loading Dashboard...</div>;

    return (
        <div className={styles.dashboardPage}>
            <div className={styles.container}>
                <header className={styles.dashHeader}>
                    <div>
                        <h1>Zinco Admin Panel</h1>
                        <p>Manage leads and global website metadata</p>
                    </div>
                    <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                </header>

                <div className={styles.tabsContainer}>
                    <button 
                        className={`${styles.tabBtn} ${activeTab === 'leads' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('leads')}
                    >
                        Lead Management
                    </button>
                    <button 
                        className={`${styles.tabBtn} ${activeTab === 'seo' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('seo')}
                    >
                        Dynamic SEO Manager
                    </button>
                </div>

                {activeTab === 'leads' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <h3>Total Leads</h3>
                                <div className={styles.statValue}>{leads.length}</div>
                            </div>
                            <div className={styles.statCard}>
                                <h3>New Leads</h3>
                                <div className={styles.statValue}>{leads.filter(l => l.status === 'New').length}</div>
                            </div>
                            <div className={styles.statCard}>
                                <h3>Actions</h3>
                                <button onClick={handleExportCsv} className={styles.exportBtn}>
                                    📥 Export Leads to CSV
                                </button>
                            </div>
                        </div>

                        {/* Analytics Section */}
                        <div className={styles.analyticsGrid}>
                            <div className={styles.chartCard}>
                                <h3>Leads by Service Type</h3>
                                <div className={styles.chartArea}>
                                    {Object.entries(
                                        leads.reduce((acc, lead) => {
                                            const type = lead.material || 'General';
                                            acc[type] = (acc[type] || 0) + 1;
                                            return acc;
                                        }, {})
                                    ).map(([type, count]) => (
                                        <div key={type} className={styles.barRow}>
                                            <span className={styles.barLabel}>{type}</span>
                                            <div className={styles.barWrapper}>
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(count / (leads.length || 1)) * 100}%` }}
                                                    className={styles.bar}
                                                />
                                            </div>
                                            <span className={styles.barCount}>{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.chartCard}>
                                <h3>Leads Trend (Last 7 Days)</h3>
                                <div className={styles.chartArea}>
                                    {[...Array(7)].map((_, i) => {
                                        const d = new Date();
                                        d.setDate(d.getDate() - (6 - i));
                                        const dateStr = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
                                        const count = leads.filter(l => new Date(l.created_at).toDateString() === d.toDateString()).length;
                                        const maxLeads = Math.max(...[0, ...[...Array(7)].map((_, j) => {
                                            const dj = new Date(); dj.setDate(dj.getDate() - j);
                                            return leads.filter(l => new Date(l.created_at).toDateString() === dj.toDateString()).length;
                                        })]);
                                        
                                        return (
                                            <div key={i} className={styles.trendCol}>
                                                <div className={styles.trendBarWrapper}>
                                                    <motion.div 
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${maxLeads > 0 ? (count / maxLeads) * 100 : 0}%` }}
                                                        className={styles.trendBar}
                                                    >
                                                        {count > 0 && <span className={styles.trendCount}>{count}</span>}
                                                    </motion.div>
                                                </div>
                                                <span className={styles.trendLabel}>{dateStr}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableWrapper}>
                            <table className={styles.leadsTable}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Customer</th>
                                        <th>Contact</th>
                                        <th>Details</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map(lead => (
                                        <tr key={lead.id}>
                                            <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                                            <td>
                                                <strong>{lead.name}</strong>
                                                <div className={styles.subtext}>{lead.email}</div>
                                            </td>
                                            <td>{lead.phone}</td>
                                            <td>
                                                {lead.area && <div>{lead.area} sq ft</div>}
                                                {lead.material && <div className={styles.badge}>{lead.material}</div>}
                                                {lead.source && <div className={styles.sourceBadge}>{lead.source}</div>}
                                                {lead.message && <div className={styles.messagePreview}>{lead.message}</div>}
                                            </td>
                                            <td>
                                                <select 
                                                    value={lead.status}
                                                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                                                    className={`${styles.statusSelect} ${styles[lead.status.toLowerCase()]}`}
                                                >
                                                    <option value="New">New</option>
                                                    <option value="Contacted">Contacted</option>
                                                    <option value="Quoted">Quoted</option>
                                                    <option value="Completed">Completed</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'seo' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.seoContainer}>
                        <div className={styles.seoHeader}>
                            <h2>Manage Page SEO</h2>
                            <button onClick={handlePublishSeo} className={styles.publishBtn}>
                                🚀 Publish SEO Changes
                            </button>
                        </div>
                        <p className={styles.seoHelper}>
                            Update Title, Description, and Keywords for any route. Note: Clicking "Publish" rebuilds the website so changes are visible to Google.
                        </p>

                        <div className={styles.seoFormCard}>
                            <h3>{isEditingSeo ? 'Edit SEO Entry' : 'Add New SEO Entry'}</h3>
                            {seoMessage.text && (
                                <div className={`${styles.seoMessage} ${styles[seoMessage.type]}`}>
                                    {seoMessage.text}
                                </div>
                            )}
                            <form onSubmit={handleSeoSubmit} className={styles.seoForm}>
                                <div className={styles.advancedSeoGrid}>
                                    {/* Left Column: Form Setup */}
                                    <div className={styles.seoInputs}>
                                        <div className={styles.formGroup}>
                                            <label>Select Page Route</label>
                                            {isEditingSeo ? (
                                                <input type="text" value={seoForm.route} disabled className={styles.readOnlyInput} />
                                            ) : (
                                                <select 
                                                    value={seoForm.route} 
                                                    onChange={e => setSeoForm({...seoForm, route: e.target.value})}
                                                    required
                                                >
                                                    <option value="">-- Choose a Route --</option>
                                                    {PREDEFINED_ROUTES.map(r => <option key={r} value={r}>{r}</option>)}
                                                    <option value="custom">Custom Route...</option>
                                                </select>
                                            )}
                                            {seoForm.route === 'custom' && !isEditingSeo && (
                                                <input 
                                                    type="text" 
                                                    onChange={e => setSeoForm({...seoForm, route: e.target.value})}
                                                    placeholder="Enter custom path (e.g. /my-page)"
                                                    style={{marginTop: '10px'}}
                                                />
                                            )}
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Focus Keyword 🎯</label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={seoForm.focus_keyword || ''} 
                                                onChange={e => setSeoForm({...seoForm, focus_keyword: e.target.value})} 
                                                placeholder="e.g. industrial roofing contractor"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Meta Title</label>
                                            <div className={styles.inputWithCounter}>
                                                <input 
                                                    type="text" 
                                                    required 
                                                    value={seoForm.title} 
                                                    onChange={e => setSeoForm({...seoForm, title: e.target.value})} 
                                                />
                                                <span className={`${styles.charCount} ${styles[seoAnalysis.titleLen]}`}>{seoForm.title.length} chars</span>
                                            </div>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Meta Description</label>
                                            <div className={styles.inputWithCounter}>
                                                <textarea 
                                                    required 
                                                    rows="3"
                                                    value={seoForm.description} 
                                                    onChange={e => setSeoForm({...seoForm, description: e.target.value})} 
                                                ></textarea>
                                                <span className={`${styles.charCount} ${styles[seoAnalysis.descLen]}`}>{seoForm.description.length} chars</span>
                                            </div>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Meta Keywords</label>
                                            <input 
                                                type="text" 
                                                value={seoForm.keywords} 
                                                onChange={e => setSeoForm({...seoForm, keywords: e.target.value})} 
                                            />
                                        </div>
                                    </div>

                                    {/* Right Column: Live Analysis */}
                                    <div className={styles.seoAnalysisPanel}>
                                        <h4>Live SEO Analysis</h4>
                                        <ul className={styles.trafficLights}>
                                            <li className={styles[seoAnalysis.kwInTitle]}>
                                                <span className={styles.dot}></span> Focus Keyword in Meta Title
                                            </li>
                                            <li className={styles[seoAnalysis.titleLen]}>
                                                <span className={styles.dot}></span> Title Length (40-60 chars)
                                            </li>
                                            <li className={styles[seoAnalysis.kwInDesc]}>
                                                <span className={styles.dot}></span> Focus Keyword in Meta Description
                                            </li>
                                            <li className={styles[seoAnalysis.descLen]}>
                                                <span className={styles.dot}></span> Description Length (120-160 chars)
                                            </li>
                                            <li className={styles[seoAnalysis.density.score]}>
                                                <span className={styles.dot}></span> Keyphrase Density in Content: {seoAnalysis.density.value}%
                                            </li>
                                        </ul>
                                        <button 
                                            type="button" 
                                            onClick={analyzeKeywordDensity} 
                                            className={styles.scanBtn}
                                            disabled={isAnalyzing || !seoForm.focus_keyword || !seoForm.route || seoForm.route === 'custom'}
                                        >
                                            {isAnalyzing ? 'Scanning Live Page...' : 'Scan Content for Density'}
                                        </button>
                                        <p className={styles.scanHelper}>Save and Publish to ensure the scanner analyzes the latest version of your page.</p>
                                    </div>
                                </div>
                                <div className={styles.formActions}>
                                    <button type="submit" className={styles.saveBtn}>
                                        {isEditingSeo ? 'Update SEO' : 'Save SEO'}
                                    </button>
                                    {isEditingSeo && (
                                        <button type="button" onClick={() => { setIsEditingSeo(false); setSeoForm({ route: '', title: '', description: '', keywords: '', focus_keyword: '' }); }} className={styles.cancelBtn}>
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>

                        <div className={styles.tableWrapper}>
                            <table className={styles.seoTable}>
                                <thead>
                                    <tr>
                                        <th>Route</th>
                                        <th>Focus Keyword</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {seoData.map(item => (
                                        <tr key={item.id}>
                                            <td className={styles.routeCol}><strong>{item.route}</strong></td>
                                            <td><span className={styles.focusBadge}>{item.focus_keyword || '-'}</span></td>
                                            <td><div className={styles.truncate}>{item.title}</div></td>
                                            <td><div className={styles.truncate}>{item.description}</div></td>
                                            <td className={styles.actionCol}>
                                                <button onClick={() => handleEditSeo(item)} className={styles.editBtn}>Edit</button>
                                                <button onClick={() => handleDeleteSeo(item.id)} className={styles.deleteBtn}>Del</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {seoData.length === 0 && (
                                        <tr>
                                            <td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>No SEO data found. Add one above.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
