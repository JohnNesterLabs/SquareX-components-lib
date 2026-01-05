import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const Icons = {
    success: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="#00B050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    warning: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#B58500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    danger: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#D92D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};

/**
 * Toast Component
 * 
 * A notification toast component with Success, Warning, and Danger states.
 * Matches the Figma design.
 * 
 * @param {string} type - 'success', 'warning', 'danger'
 * @param {string} title - Main heading
 * @param {string} message - Description text
 * @param {function} onClose - Callback when close button is clicked
 * @param {number} duration - Auto-close duration in ms (optional)
 */
const Toast = ({
    type = 'success',
    title,
    message,
    onClose,
    duration,
    className = '',
    ...props
}) => {
    useEffect(() => {
        if (duration && onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    return (
        <div className={`${styles.toast} ${styles[type]} ${className}`} role="alert">
            <div className={`${styles.iconWrapper} ${styles[`icon-${type}`]}`}>
                {Icons[type]}
            </div>

            <div className={styles.content}>
                {title && <h4 className={styles.title}>{title}</h4>}
                {message && <p className={styles.message}>{message}</p>}
            </div>

            <button className={styles.closeButton} onClick={onClose} aria-label="Close notification">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#5F6D7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default Toast;
