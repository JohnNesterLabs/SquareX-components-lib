import React from 'react';
import styles from './Notification.module.css';

/**
 * Notification Component
 * 
 * A notification counter/badge component used to display counts or status indicators.
 * Supports different variants (primary, neutral, subtle) and sizes (medium, small).
 * Automatically handles counts > 99 by displaying "99+".
 * 
 * @param {number|string} count - The number to display
 * @param {string} variant - Visual style: 'primary', 'neutral', 'subtle' (default: 'primary')
 * @param {string} size - Size: 'medium', 'small' (default: 'medium')
 * @param {number} maxCount - The maximum number to display before showing '+' (default: 99)
 * @param {string} className - Additional CSS classes
 */
const Notification = ({
    count = 0,
    variant = 'primary',
    size = 'medium',
    maxCount = 99,
    className = '',
    ...props
}) => {
    // Normalize variant
    const normalizeVariant = (v) => {
        if (!v) return 'primary';
        const normalized = v.toLowerCase();
        if (['primary', 'neutral', 'subtle'].includes(normalized)) return normalized;
        return 'primary';
    };

    // Normalize size
    const normalizeSize = (s) => {
        if (!s) return 'medium';
        const normalized = s.toLowerCase();
        if (['medium', 'small'].includes(normalized)) return normalized;
        return 'medium';
    };

    const actualVariant = normalizeVariant(variant);
    const actualSize = normalizeSize(size);

    const notificationClassNames = [
        styles.notification,
        styles[`variant_${actualVariant}`],
        styles[`size_${actualSize}`],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const renderContent = () => {
        // Handle numeric overflow
        if (typeof count === 'number' && count > maxCount) {
            return (
                <>
                    <span className={styles.count}>{maxCount}</span>
                    <span className={styles.plus}>+</span>
                </>
            );
        }

        // Handle manual string with '+' (e.g., "99+")
        if (typeof count === 'string' && count.endsWith('+')) {
            const baseValue = count.slice(0, -1);
            return (
                <>
                    <span className={styles.count}>{baseValue}</span>
                    <span className={styles.plus}>+</span>
                </>
            );
        }

        return count;
    };

    return (
        <span className={notificationClassNames} {...props}>
            {renderContent()}
        </span>
    );
};

export default Notification;
