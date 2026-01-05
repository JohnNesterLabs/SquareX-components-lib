import React from 'react';
import styles from './TabList.module.css';
import Tab from './Tab';

/**
 * TabList Component
 * 
 * A container for Tab components that handles layout and spacing.
 * 
 * @param {Array} tabs - Array of tab objects { id, label, count, disabled }
 * @param {string|number} activeTabId - The ID of the currently active tab
 * @param {function} onTabChange - Callback when a tab is clicked
 * @param {string} className - Additional CSS classes
 */
const TabList = ({
    tabs = [],
    activeTabId,
    onTabChange,
    className = '',
    ...props
}) => {
    const containerClassNames = [
        styles.tabList,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={containerClassNames} role="tablist" {...props}>
            {tabs.map((tab) => (
                <Tab
                    key={tab.id}
                    label={tab.label}
                    count={tab.count}
                    isActive={activeTabId === tab.id}
                    disabled={tab.disabled}
                    onClick={() => onTabChange && onTabChange(tab.id)}
                />
            ))}
        </div>
    );
};

export default TabList;
