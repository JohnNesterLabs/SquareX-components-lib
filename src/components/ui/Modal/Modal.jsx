import React, { useEffect } from 'react';
import Icon from '../Icon/Icon';
import styles from './Modal.module.css';

/**
 * Modal Component
 * 
 * A flexible modal dialog component with overlay, close button, and customizable content.
 * Matches the Figma design for success states and general dialogs.
 * 
 * @param {boolean} isOpen - Whether the modal is visible
 * @param {function} onClose - Callback when modal is closed (via X or overlay)
 * @param {string} title - Main heading text
 * @param {string} description - Subtext description
 * @param {ReactNode} icon - Icon element to display at the top
 * @param {ReactNode} children - Custom content (overrides title/desc if provided)
 * @param {Array} actions - Array of action buttons or custom action content
 * @param {string} size - 'small', 'medium', 'large' (default: 'medium')
 * @param {boolean} showCloseButton - Whether to show the X button (default: true)
 */
const Modal = ({
    isOpen,
    onClose,
    title,
    description,
    icon,
    children,
    actions,
    size = 'medium',
    showCloseButton = true,
    className = '',
    ...props
}) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose && onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={`${styles.modal} ${styles[size]} ${className}`} role="dialog" aria-modal="true">
                {showCloseButton && (
                    <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                        <Icon name="X" size="medium" />
                    </button>
                )}

                <div className={styles.content}>
                    {icon && <div className={styles.iconWrapper}>{icon}</div>}

                    {children ? (
                        children
                    ) : (
                        <div className={styles.textStack}>
                            {title && <h2 className={styles.title}>{title}</h2>}
                            {description && <p className={styles.description}>{description}</p>}
                        </div>
                    )}

                    {actions && <div className={styles.actions}>{actions}</div>}
                </div>
            </div>
        </div>
    );
};

export default Modal;
