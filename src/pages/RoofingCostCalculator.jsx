import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import styles from './RoofingCostCalculator.module.css';

const RoofingCostCalculator = () => {
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

    return (
        <div className={styles.page}>
            <SEO 
                title="Industrial Roofing Cost Calculator | Price Estimator Pune & Mumbai"
                description="Use our interactive roofing cost calculator to get an instant estimate for your industrial shed. Compare Metal, UPVC, and PUF panel prices in Maharashtra."
                canonicalUrl="https://zincoroof.com/industrial-roofing-cost-calculator"
            />
            
            <div className={styles.container}>
                <header className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Roofing Cost Calculator
                    </motion.h1>
                    <p>Get a rough estimate for your industrial roofing project in seconds. Simply enter your shed area and choose a material.</p>
                </header>

                <section className={styles.toolSection}>
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
                                <p className={styles.disclaimer}>*This is a rough estimate including standard installation and basic structural work. Actual prices may vary based on site complexity, location, and height.</p>
                                <button className="btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                                    Get Exact Quote for My Project
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.comparisonSection}>
                    <div className={styles.header}>
                        <h2>Material Comparison Engine</h2>
                        <p>Choose the right material based on your budget and facility requirements.</p>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Metal Sheets</th>
                                    <th>UPVC Sheets</th>
                                    <th>PUF Panels</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Cost Index</strong></td>
                                    <td>Budget Friendly</td>
                                    <td>Value for Money</td>
                                    <td>Premium Investment</td>
                                </tr>
                                <tr>
                                    <td><strong>Heat Insulation</strong></td>
                                    <td>Low (Heats fast)</td>
                                    <td>Medium-High</td>
                                    <td><span className={styles.bestValue}>Superior (Best)</span></td>
                                </tr>
                                <tr>
                                    <td><strong>Durability</strong></td>
                                    <td>20+ Years</td>
                                    <td>25+ Years</td>
                                    <td>30+ Years</td>
                                </tr>
                                <tr>
                                    <td><strong>Corrosion Resistance</strong></td>
                                    <td>High</td>
                                    <td><span className={styles.bestValue}>Excellent (Rust Proof)</span></td>
                                    <td>High</td>
                                </tr>
                                <tr>
                                    <td><strong>Ideal For</strong></td>
                                    <td>Warehouses</td>
                                    <td>Chemical Plants</td>
                                    <td>Cold Storages / Pharma</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RoofingCostCalculator;
