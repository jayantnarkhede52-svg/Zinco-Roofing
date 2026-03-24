import RoofingCalculator from '../components/shared/RoofingCalculator';
import SEO from '../components/shared/SEO';
import styles from './RoofingCostCalculator.module.css';
const RoofingCostCalculator = () => {
    return (
        <div className={styles.page}>
            <SEO 
                title="Industrial Roofing Cost Calculator | Price Estimator Pune & Mumbai"
                description="Use our interactive roofing cost calculator to get an instant estimate for your industrial shed. Compare Metal, UPVC, and PUF panel prices in Maharashtra."
                canonicalUrl="https://www.zincoroof.com/industrial-roofing-cost-calculator"
            />
            
            <div className={styles.container}>
                <RoofingCalculator />

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
