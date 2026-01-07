import React from 'react';
import Avatar from './Avatar';
import styles from './AvatarGroup.module.css';

/**
 * AvatarGroup Component
 * 
 * @param {Array} avatars - Array of avatar data { src, initials }
 * @param {number} max - Maximum number of avatars to show
 * @param {string} layout - 'spaced', 'overlap'
 * @param {string} size - 'large', 'medium', 'small'
 * @param {string} className - Additional CSS classes
 */
const AvatarGroup = ({
    avatars = [],
    max = 3,
    layout = 'overlap',
    size = 'medium',
    className = '',
    ...props
}) => {
    const visibleAvatars = avatars.slice(0, max);
    const extraCount = avatars.length - max;

    const containerClasses = [
        styles.group,
        styles[`layout_${layout}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses} {...props}>
            {visibleAvatars.map((avatar, index) => (
                <Avatar
                    key={index}
                    {...avatar}
                    size={size}
                    className={styles.groupItem}
                    style={{ zIndex: avatars.length - index }}
                />
            ))}
            {extraCount > 0 && (
                <Avatar
                    initials={`+${extraCount}`}
                    size={size}
                    className={styles.groupItem}
                    style={{ zIndex: 0 }}
                />
            )}
        </div>
    );
};

export default AvatarGroup;
