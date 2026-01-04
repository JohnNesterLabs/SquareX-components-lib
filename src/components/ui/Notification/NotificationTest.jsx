import React from 'react';
import Notification from './Notification';
import styles from './NotificationTest.module.css';

/**
 * NotificationTest Component
 * 
 * A test component to demonstrate all Notification functionality.
 */
const NotificationTest = () => {
    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Notification Component Test</h2>

            {/* Variants Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Variants</h3>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <h4>Primary</h4>
                        <Notification count="99+" variant="primary" />
                        <p className={styles.description}>Active/Primary state</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Neutral</h4>
                        <Notification count="99+" variant="neutral" />
                        <p className={styles.description}>Secondary/Neutral state</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Subtle</h4>
                        <Notification count="99+" variant="subtle" />
                        <p className={styles.description}>Disabled/Subtle state</p>
                    </div>
                </div>
            </div>

            {/* Sizes Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Sizes</h3>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <h4>Medium (Default)</h4>
                        <div className={styles.group}>
                            <Notification count={5} size="medium" variant="primary" />
                            <Notification count="99+" size="medium" variant="neutral" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <h4>Small</h4>
                        <div className={styles.group}>
                            <Notification count={5} size="small" variant="primary" />
                            <Notification count="99+" size="small" variant="neutral" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Count Behavior Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Count Behavior</h3>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <h4>Single Digit</h4>
                        <Notification count={1} />
                    </div>
                    <div className={styles.item}>
                        <h4>Double Digit</h4>
                        <Notification count={42} />
                    </div>
                    <div className={styles.item}>
                        <h4>Max Count (99)</h4>
                        <Notification count={99} />
                    </div>
                    <div className={styles.item}>
                        <h4>Overflow (&gt;99)</h4>
                        <Notification count={150} />
                    </div>
                    <div className={styles.item}>
                        <h4>Custom Max (e.g., 9+)</h4>
                        <Notification count={15} maxCount={9} />
                    </div>
                </div>
            </div>

            {/* Context Examples */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Context Examples</h3>
                <div className={styles.contextGrid}>
                    <div className={styles.contextItem}>
                        <span>Inbox</span>
                        <Notification count={12} size="small" />
                    </div>
                    <div className={styles.contextItem}>
                        <span>Messages</span>
                        <Notification count="99+" variant="neutral" size="small" />
                    </div>
                    <div className={styles.contextItem}>
                        <span>Archived</span>
                        <Notification count={0} variant="subtle" size="small" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationTest;
