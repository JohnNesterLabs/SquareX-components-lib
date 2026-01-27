import React, { useState } from 'react';
import { Toast, Button } from 'squarex-ui-component-lib';
import styles from './ToastTest.module.css';

const ToastTest = () => {
    const [toasts, setToasts] = useState([]);

    const addToast = (type) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, type }]);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Toast Component Test</h2>

            {/* Static Examples (Figma Design) */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Static Variants (Figma Design)</h3>
                <div className={styles.staticGrid}>
                    <Toast
                        type="success"
                        title="Success"
                        message="New Gaming list in category ‘Gaming’ created."
                    />
                    <Toast
                        type="warning"
                        title="Warning"
                        message="New Gaming list in category ‘Gaming’ created."
                    />
                    <Toast
                        type="danger"
                        title="Danger"
                        message="New Gaming list in category ‘Gaming’ created."
                    />
                </div>
            </div>

            {/* Interactive Examples */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Interactive Triggers</h3>
                <p className={styles.description}>Click buttons to spawn toasts in the top-right corner.</p>
                <div className={styles.buttonGroup}>
                    <Button
                        label="Trigger Success"
                        style="primary"
                        onClick={() => addToast('success')}
                    />
                    <Button
                        label="Trigger Warning"
                        style="neutral"
                        onClick={() => addToast('warning')}
                    />
                    <Button
                        label="Trigger Danger"
                        style="subtle"
                        onClick={() => addToast('danger')}
                    />
                </div>
            </div>

            {/* Toast Container (Fixed Position) */}
            <div className={styles.toastContainer}>
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        type={toast.type}
                        title={toast.type.charAt(0).toUpperCase() + toast.type.slice(1)}
                        message="New Gaming list in category ‘Gaming’ created."
                        onClose={() => removeToast(toast.id)}
                        duration={3000}
                        className={styles.toastItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToastTest;
