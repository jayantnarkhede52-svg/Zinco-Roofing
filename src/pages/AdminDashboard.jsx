import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const [leads, setLeads] = useState([]);
    const [seoData, setSeoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('leads');
    const navigate = useNavigate();

    // SEO Form State
    const [seoForm, setSeoForm] = useState({ route: '/', title: '', description: '', keywords: '', focusKeyword: '' });
    const [isEditingSeo, setIsEditingSeo] = useState(false);
    const [seoMessage, setSeoMessage] = useState({ type: '', text: '' });
    
    // Advanced SEO Analysis State
    const [seoAnalysis, setSeoAnalysis] = useState({
        titleLen: 'red', descLen: 'red', kwInTitle: 'red', kwInDesc: 'red', density: { score: 'red', value: 0 }
    });
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const PREDEFINED_ROUTES = [
        '/', '/about', '/services', '/projects', '/areas', '/gallery', '/contact', '/cost-estimator',
        '/services/metal-roofing', '/services/puf-panel-roofing', '/services/polycarbonate-roofing', '/services/industrial-painting',
        '/products/decking-sheet', '/products/color-coated-roofing-sheet', '/products/polycarbonate-sheet'
    ];

    useEffect(() => {
        const fetchInitialData = async () => {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                navigate('/admin/login');
                return;
            }

            try {
                // Fetch Leads
                const leadsRes = await fetch('/api/leads', {
                    headers: { 'x-auth-token': token }
                });
                
                if (leadsRes.status === 401) {
                    localStorage.removeItem('adminToken');
                    navigate('/admin/login');
                    return;
                }
                const leadsData = await leadsRes.json();
                setLeads(leadsData);

                // Fetch SEO
                const seoRes = await fetch('/api/seo');
                if (seoRes.ok) {
                    const seoItems = await seoRes.json();
                    setSeoData(seoItems);
                }

                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [navigate]);

    // Leads logic
    const updateStatus = async (id, newStatus) => {
        const token = localStorage.getItem('adminToken');
        try {
            const res = await fetch(`/api/leads/${id}`, {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json',
                    'x-auth-token': token 
                },
                body: JSON.stringify({ status: newStatus })
            });

            if (res.ok) {
                setLeads(leads.map(lead => lead._id === id ? { ...lead, status: newStatus } : lead));
            }
        } catch (err) {
            console.error('Update failed');
        }
    };

    // Advanced SEO Analysis Logic
    useEffect(() => {
        if (!seoForm.focusKeyword) {
            setSeoAnalysis(prev => ({ ...prev, titleLen: 'red', descLen: 'red', kwInTitle: 'red', kwInDesc: 'red' }));
            return;
        }

        const kw = seoForm.focusKeyword.toLowerCase().trim();
        const tLen = seoForm.title.length;
        const dLen = seoForm.description.length;
        
        setSeoAnalysis(prev => ({
            ...prev,
            titleLen: tLen >= 40 && tLen <= 60 ? 'green' : (tLen > 0 ? 'yellow' : 'red'),
            descLen: dLen >= 120 && dLen <= 160 ? 'green' : (dLen > 0 ? 'yellow' : 'red'),
            kwInTitle: seoForm.title.toLowerCase().includes(kw) ? 'green' : 'red',
            kwInDesc: seoForm.description.toLowerCase().includes(kw) ? 'green' : 'red'
        }));
    }, [seoForm.title, seoForm.description, seoForm.focusKeyword]);

    const analyzeKeywordDensity = async () => {
        if (!seoForm.route || !seoForm.focusKeyword) return;
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
            
            const kw = seoForm.focusKeyword.toLowerCase().trim();
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
        const token = localStorage.getItem('adminToken');
        try {
            const formRoute = seoForm.route.startsWith('/') ? seoForm.route : `/${seoForm.route}`;
            const res = await fetch('/api/seo', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ ...seoForm, route: formRoute })
            });

            if (res.ok) {
                const savedSeo = await res.json();
                // Update local list
                if (isEditingSeo) {
                    setSeoData(seoData.map(item => item.route === savedSeo.route ? savedSeo : item));
                } else {
                    setSeoData([...seoData.filter(i => i.route !== savedSeo.route), savedSeo]);
                }
                
                setSeoMessage({ type: 'success', text: 'SEO Data Saved Successfully!' });
                setSeoForm({ route: '/', title: '', description: '', keywords: '', focusKeyword: '' });
                setIsEditingSeo(false);
                setTimeout(() => setSeoMessage({ type: '', text: '' }), 3000);
            } else {
                setSeoMessage({ type: 'error', text: 'Failed to save SEO data.' });
            }
        } catch (err) {
            setSeoMessage({ type: 'error', text: 'Server error saving SEO.' });
        }
    };

    const handleEditSeo = (item) => {
        setSeoForm({ focusKeyword: '', ...item });
        setIsEditingSeo(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteSeo = async (id) => {
        if (!window.confirm('Are you sure you want to delete this SEO entry?')) return;
        
        const token = localStorage.getItem('adminToken');
        try {
            const res = await fetch(`/api/seo/${id}`, {
                method: 'DELETE',
                headers: { 'x-auth-token': token }
            });

            if (res.ok) {
                setSeoData(seoData.filter(item => item._id !== id));
            }
        } catch (err) {
            console.error('Delete failed');
        }
    };

    const handleExportCsv = async () => {
        const token = localStorage.getItem('adminToken');
        try {
            const res = await fetch('/api/leads/export', {
                headers: { 'x-auth-token': token }
            });
            if (res.ok) {
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `leads_export_${new Date().toISOString().split('T')[0]}.csv`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
        } catch (err) {
            console.error('Export failed');
        }
    };

    const handlePublishSeo = async () => {
        const token = localStorage.getItem('adminToken');
        try {
            const res = await fetch('/api/seo/publish', {
                method: 'POST',
                headers: { 'x-auth-token': token }
            });
            const data = await res.json();
            
            if (res.ok) {
                setSeoMessage({ type: 'success', text: 'Deployment triggered! Changes will be live in 1-2 minutes.' });
            } else {
                setSeoMessage({ type: 'error', text: data.msg || 'Deployment Trigger Failed.' });
            }
            setTimeout(() => setSeoMessage({ type: '', text: '' }), 6000);
        } catch (err) {
            setSeoMessage({ type: 'error', text: 'Server error triggering deployment.' });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
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
                                            const type = lead.serviceType || lead.material || 'General';
                                            acc[type] = (acc[type] || 0) + 1;
                                            return acc;
                                        }, {})
                                    ).map(([type, count]) => (
                                        <div key={type} className={styles.barRow}>
                                            <span className={styles.barLabel}>{type}</span>
                                            <div className={styles.barWrapper}>
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(count / leads.length) * 100}%` }}
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
                                        const count = leads.filter(l => new Date(l.createdAt).toDateString() === d.toDateString()).length;
                                        const maxLeads = Math.max(...[0, ...[...Array(7)].map((_, j) => {
                                            const dj = new Date(); dj.setDate(dj.getDate() - j);
                                            return leads.filter(l => new Date(l.createdAt).toDateString() === dj.toDateString()).length;
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
                                        <tr key={lead._id}>
                                            <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                <strong>{lead.name}</strong>
                                                <div className={styles.subtext}>{lead.email}</div>
                                            </td>
                                            <td>{lead.phone}</td>
                                            <td>
                                                {lead.area && <div>{lead.area}</div>}
                                                {lead.serviceType && <div className={styles.badge}>{lead.serviceType}</div>}
                                                {lead.source && <div className={styles.sourceBadge}>{lead.source}</div>}
                                                {lead.message && <div className={styles.messagePreview}>{lead.message}</div>}
                                            </td>
                                            <td>
                                                <select 
                                                    value={lead.status}
                                                    onChange={(e) => updateStatus(lead._id, e.target.value)}
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
                                                value={seoForm.focusKeyword || ''} 
                                                onChange={e => setSeoForm({...seoForm, focusKeyword: e.target.value})} 
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
                                            disabled={isAnalyzing || !seoForm.focusKeyword || !seoForm.route || seoForm.route === 'custom'}
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
                                        <button type="button" onClick={() => { setIsEditingSeo(false); setSeoForm({ route: '', title: '', description: '', keywords: '' }); }} className={styles.cancelBtn}>
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
                                        <tr key={item._id}>
                                            <td className={styles.routeCol}><strong>{item.route}</strong></td>
                                            <td><span className={styles.focusBadge}>{item.focusKeyword || '-'}</span></td>
                                            <td><div className={styles.truncate}>{item.title}</div></td>
                                            <td><div className={styles.truncate}>{item.description}</div></td>
                                            <td className={styles.actionCol}>
                                                <button onClick={() => handleEditSeo(item)} className={styles.editBtn}>Edit</button>
                                                <button onClick={() => handleDeleteSeo(item._id)} className={styles.deleteBtn}>Del</button>
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
