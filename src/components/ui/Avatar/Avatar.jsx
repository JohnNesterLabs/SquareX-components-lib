import React from 'react';
import styles from './Avatar.module.css';

/**
 * Avatar Component
 * 
 * @param {string} src - Image source URL
 * @param {string} initials - Initials to show if no image is provided
 * @param {string} size - 'large' (40px), 'medium' (32px), 'small' (24px)
 * @param {string} shape - 'circle', 'square'
 * @param {string} className - Additional CSS classes
 */
const Avatar = ({
    src,
    initials,
    size = 'medium',
    shape = 'circle',
    className = '',
    ...props
}) => {
    const containerClasses = [
        styles.avatar,
        styles[`size_${size}`],
        styles[`shape_${shape}`],
        !src && initials ? styles.initialsBg : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses} {...props}>
            {src ? (
                <img src={src} alt={initials || 'avatar'} className={styles.image} />
            ) : (
                <span className={styles.initials}>{initials}</span>
            )}
        </div>
    );
};

export default Avatar;
