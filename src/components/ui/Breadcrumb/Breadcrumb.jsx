import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import Icon from '../Icon/Icon';
import styles from './Breadcrumb.module.css';
import './Breadcrumb.antd.css';

/**
 * Breadcrumb Component
 * 
 * A wrapper around Ant Design's Breadcrumb component with custom styling.
 * 
 * @param {Array} items - Array of breadcrumb items: { title, href, icon, menu }
 * @param {string|ReactNode} separator - Custom separator (default: '/')
 * @param {string} className - Additional CSS classes
 */
const Breadcrumb = ({
    items = [],
    separator = '/',
    className = '',
    ...props
}) => {
    // Process items to include icons if provided
    const processedItems = items.map((item) => ({
        ...item,
        title: (
            <span className={styles.itemContent}>
                {item.icon && (
                    <Icon
                        name={item.icon}
                        size={14}
                        className={styles.itemIcon}
                    />
                )}
                <span className={styles.itemTitle}>{item.title}</span>
            </span>
        ),
    }));

    return (
        <div className={`${styles.breadcrumbContainer} ${className}`}>
            <AntBreadcrumb
                items={processedItems}
                separator={<span className={styles.separator}>{separator}</span>}
                className={styles.antBreadcrumb}
                {...props}
            />
        </div>
    );
};

export default Breadcrumb;
