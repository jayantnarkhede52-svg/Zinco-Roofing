import styles from './Skeleton.module.css';

export const SkeletonBox = ({ width, height, borderRadius, margin, className = '' }) => {
    return (
        <div 
            className={`${styles.skeleton} ${className}`} 
            style={{ 
                width: width || '100%', 
                height: height || '1rem', 
                borderRadius: borderRadius || '4px',
                margin: margin || '0'
            }} 
        />
    );
};

export const SkeletonText = ({ lines = 3, lastLineWidth = '70%', className = '' }) => {
    return (
        <div className={`${styles.skeletonTextContainer} ${className}`}>
            {[...Array(lines)].map((_, i) => (
                <SkeletonBox 
                    key={i} 
                    width={i === lines - 1 ? lastLineWidth : '100%'} 
                    height="0.85rem" 
                    margin="0 0 0.5rem 0" 
                />
            ))}
        </div>
    );
};

export const HeroSkeleton = () => (
    <div className={styles.heroSkeleton}>
        <div className={styles.container}>
            <SkeletonBox width="60%" height="4rem" margin="0 auto 1.5rem" />
            <SkeletonBox width="80%" height="1.5rem" margin="0 auto 2rem" />
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <SkeletonBox width="150px" height="3rem" borderRadius="2rem" />
                <SkeletonBox width="150px" height="3rem" borderRadius="2rem" />
            </div>
        </div>
    </div>
);

export const CardSkeleton = () => (
    <div className={styles.cardSkeleton}>
        <SkeletonBox height="200px" borderRadius="1rem" margin="0 0 1rem 0" />
        <SkeletonBox width="40%" height="1rem" margin="0 0 0.75rem 0" />
        <SkeletonBox width="90%" height="1.5rem" margin="0 0 0.75rem 0" />
        <SkeletonText lines={2} />
    </div>
);
