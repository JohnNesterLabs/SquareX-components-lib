import React from 'react';
import Avatar from './Avatar';
import styles from './AvatarBlock.module.css';

/**
 * AvatarBlock Component
 * 
 * @param {object} avatarProps - Props for the Avatar component
 * @param {string} title - Main title text
 * @param {string} description - Subtext description
 * @param {string} className - Additional CSS classes
 */
const AvatarBlock = ({
    avatarProps,
    title,
    description,
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.block} ${className}`} {...props}>
            <Avatar {...avatarProps} />
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                {description && <div className={styles.description}>{description}</div>}
            </div>
        </div>
    );
};

export default AvatarBlock;
