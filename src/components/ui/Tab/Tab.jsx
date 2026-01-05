import React from 'react';
import Notification from '../Notification/Notification';
import styles from './Tab.module.css';

/**
 * Tab Component
 * 
 * A tab component used for navigation or switching views.
 * Supports active, default, and disabled states.
 * Integrates the Notification component for displaying counts.
 * 
 * @param {string} label - The text label for the tab
 * @param {number|string} count - Optional count to display in the notification badge
 * @param {boolean} isActive - Whether the tab is currently active
 * @param {boolean} disabled - Whether the tab is disabled
 * @param {function} onClick - Callback when tab is clicked
 * @param {string} className - Additional CSS classes
 */
const Tab = ({
    label,
    count,
    isActive = false,
    disabled = false,
    onClick,
    className = '',
    ...props
}) => {
    // Determine notification variant based on tab state
    const getNotificationVariant = () => {
        if (disabled) return 'subtle';
        if (isActive) return 'primary';
        return 'neutral';
    };

    const tabClassNames = [
        styles.tab,
        isActive && styles.active,
        disabled && styles.disabled,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const handleClick = (e) => {
        if (!disabled && onClick) {
            onClick(e);
        }
    };

    return (
        <button
            className={tabClassNames}
            onClick={handleClick}
            disabled={disabled}
            type="button"
            role="tab"
            aria-selected={isActive}
            {...props}
        >
            <span className={styles.label}>{label}</span>
            {count !== undefined && count !== null && (
                <Notification
                    count={count}
                    variant={getNotificationVariant()}
                    size="small"
                    className={styles.notification}
                />
            )}
            {isActive && <div className={styles.underline} />}
        </button>
    );
};

export default Tab;
