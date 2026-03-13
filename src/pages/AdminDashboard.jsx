import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLeads = async () => {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                navigate('/admin/login');
                return;
            }

            try {
                const res = await fetch('http://localhost:5000/api/leads', {
                    headers: { 'x-auth-token': token }
                });
                
                if (res.status === 401) {
                    localStorage.removeItem('adminToken');
                    navigate('/admin/login');
                    return;
                }

                const data = await res.json();
                setLeads(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch leads');
                setLoading(false);
            }
        };

        fetchLeads();
    }, [navigate]);

    const updateStatus = async (id, newStatus) => {
        const token = localStorage.getItem('adminToken');
        try {
            const res = await fetch(`http://localhost:5000/api/leads/${id}`, {
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
                        <h1>Lead Management</h1>
                        <p>Track and manage your industrial roofing inquiries</p>
                    </div>
                    <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                </header>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3>Total Leads</h3>
                        <div className={styles.statValue}>{leads.length}</div>
                    </div>
                    <div className={styles.statCard}>
                        <h3>New Leads</h3>
                        <div className={styles.statValue}>{leads.filter(l => l.status === 'New').length}</div>
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
                                <motion.tr 
                                    key={lead._id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <strong>{lead.name}</strong>
                                        <div className={styles.subtext}>{lead.email}</div>
                                    </td>
                                    <td>{lead.phone}</td>
                                    <td>
                                        {lead.area && <div>{lead.area} sq.ft</div>}
                                        {lead.material && <div className={styles.badge}>{lead.material}</div>}
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
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
