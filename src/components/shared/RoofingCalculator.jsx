import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './RoofingCalculator.module.css';

const RoofingCalculator = ({ title = "Industrial Roofing Cost Calculator", subtitle = "Get a rough estimate for your industrial roofing project in seconds. Simply enter your shed area and choose a material." }) => {
    const [area, setArea] = useState(500);
    const [material, setMaterial] = useState('metal');

    const materials = {
        metal: { name: 'Metal Roofing (PPGL)', pricePerSqFt: 65, durability: '20+ Years', insulation: 'Basic', maintenance: 'Low' },
        upvc: { name: 'UPVC Roofing Sheets', pricePerSqFt: 85, durability: '25+ Years', insulation: 'Excellent', maintenance: 'Very Low' },
        puf: { name: 'PUF Insulated Panels', pricePerSqFt: 180, durability: '30+ Years', insulation: 'Superior', maintenance: 'Minimal' },
        polycarbonate: { name: 'Polycarbonate Sheets', pricePerSqFt: 120, durability: '15+ Years', insulation: 'Good (Light Transmitting)', maintenance: 'Moderate' }
    };

    const estimate = useMemo(() => {
        const basePrice = area * materials[material].pricePerSqFt;
        return {
            min: basePrice,
            max: basePrice * 1.15 // 15% buffer for installation/accessories
        };
    }, [area, material]);

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleQuoteRequest = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    area,
                    material: materials[material].name,
                    estimatedPrice: `${formatCurrency(estimate.min)} - ${formatCurrency(estimate.max)}`,
                    source: 'Cost Calculator'
                })
            });

            if (res.ok) {
                setIsSubmitted(true);
            }
        } catch (err) {
            console.error('Submission failed');
        }
        setIsSubmitting(false);
    };

    return (
        <section className={styles.calculatorSection}>
            <header className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h2>
                <p>{subtitle}</p>
            </header>

            <div className={styles.card}>
                <div className={styles.calculatorGrid}>
                    <div className={styles.inputs}>
                        <div className={styles.inputGroup}>
                            <label>Total Shed Area: <span className={styles.valueDisplay}>{area} sq.ft</span></label>
                            <input 
                                type="range" 
                                min="100" 
                                max="50000" 
                                step="100" 
                                value={area}
                                onChange={(e) => setArea(parseInt(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Select Roofing Material</label>
                            <select 
                                value={material} 
                                onChange={(e) => setMaterial(e.target.value)}
                                className={styles.selectInput}
                            >
                                {Object.entries(materials).map(([key, value]) => (
                                    <option key={key} value={key}>{value.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={styles.results}>
                        <div className={styles.estimateLabel}>Estimated Project Cost</div>
                        <div className={styles.price}>{formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}</div>
                        
                        {isSubmitted ? (
                            <div className={styles.successMessage}>
                                ✅ Quote request sent! We will contact you shortly.
                            </div>
                        ) : (
                            <form onSubmit={handleQuoteRequest} className={styles.quoteForm}>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    required 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className={styles.miniInput}
                                />
                                <input 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    required 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className={styles.miniInput}
                                />
                                <button 
                                    type="submit" 
                                    className="btn-primary" 
                                    style={{ width: '100%', marginTop: '0.5rem' }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Get Exact Quote'}
                                </button>
                            </form>
                        )}
                        <p className={styles.disclaimer}>*This is a rough estimate including standard installation and basic structural work. Actual prices vary based on site complexity.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoofingCalculator;
