import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
                        <p>Manage website leads and inquiries</p>
                    </div>
                    <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                </header>

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
                                        const type = lead.service_type || lead.material || 'General';
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
                                            {lead.service_type && <div className={styles.badge}>{lead.service_type}</div>}
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
                                {leads.length === 0 && (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>No leads found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
