import React from 'react';
import { Badge } from 'squarex-ui-component-lib';
import styles from './BadgeTest.module.css';

/**
 * BadgeTest Component
 * 
 * A test component to demonstrate all Badge functionality.
 */
const BadgeTest = () => {
    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Badge Component Test</h2>

            {/* All Types Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Badge Types</h3>
                <div className={styles.badgeRow}>
                    <div className={styles.badgeItem}>
                        <h4>Active</h4>
                        <Badge label="Active" type="active" />
                        <p className={styles.description}>Used for active/enabled states</p>
                    </div>

                    <div className={styles.badgeItem}>
                        <h4>Inactive</h4>
                        <Badge label="Inactive" type="inactive" />
                        <p className={styles.description}>Used for inactive/disabled states</p>
                    </div>

                    <div className={styles.badgeItem}>
                        <h4>Default</h4>
                        <Badge label="Default" type="default" />
                        <p className={styles.description}>Used for neutral/default states</p>
                    </div>
                </div>
            </div>

            {/* All Sizes Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Badge Sizes</h3>

                <div className={styles.sizeSection}>
                    <h4>Active Badges</h4>
                    <div className={styles.badgeRow}>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Small</p>
                            <Badge label="Active" type="active" size="small" />
                        </div>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Medium</p>
                            <Badge label="Active" type="active" size="medium" />
                        </div>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Large</p>
                            <Badge label="Active" type="active" size="large" />
                        </div>
                    </div>
                </div>

                <div className={styles.sizeSection}>
                    <h4>Inactive Badges</h4>
                    <div className={styles.badgeRow}>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Small</p>
                            <Badge label="Inactive" type="inactive" size="small" />
                        </div>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Medium</p>
                            <Badge label="Inactive" type="inactive" size="medium" />
                        </div>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Large</p>
                            <Badge label="Inactive" type="inactive" size="large" />
                        </div>
                    </div>
                </div>

                <div className={styles.sizeSection}>
                    <h4>Default Badges</h4>
                    <div className={styles.badgeRow}>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Small</p>
                            <Badge label="Default" type="default" size="small" />
                        </div>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Medium</p>
                            <Badge label="Default" type="default" size="medium" />
                        </div>
                        <div className={styles.badgeItem}>
                            <p className={styles.label}>Large</p>
                            <Badge label="Default" type="default" size="large" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Use Cases Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Common Use Cases</h3>

                <div className={styles.useCaseGrid}>
                    <div className={styles.useCaseItem}>
                        <h4>User Status</h4>
                        <div className={styles.badgeGroup}>
                            <Badge label="Online" type="active" />
                            <Badge label="Offline" type="inactive" />
                            <Badge label="Away" type="default" />
                        </div>
                    </div>

                    <div className={styles.useCaseItem}>
                        <h4>Account Status</h4>
                        <div className={styles.badgeGroup}>
                            <Badge label="Verified" type="active" />
                            <Badge label="Pending" type="default" />
                            <Badge label="Suspended" type="inactive" />
                        </div>
                    </div>

                    <div className={styles.useCaseItem}>
                        <h4>Subscription</h4>
                        <div className={styles.badgeGroup}>
                            <Badge label="Premium" type="active" />
                            <Badge label="Free" type="default" />
                            <Badge label="Expired" type="inactive" />
                        </div>
                    </div>

                    <div className={styles.useCaseItem}>
                        <h4>Order Status</h4>
                        <div className={styles.badgeGroup}>
                            <Badge label="Delivered" type="active" />
                            <Badge label="Processing" type="default" />
                            <Badge label="Cancelled" type="inactive" />
                        </div>
                    </div>

                    <div className={styles.useCaseItem}>
                        <h4>Feature Flags</h4>
                        <div className={styles.badgeGroup}>
                            <Badge label="Enabled" type="active" />
                            <Badge label="Beta" type="default" />
                            <Badge label="Disabled" type="inactive" />
                        </div>
                    </div>

                    <div className={styles.useCaseItem}>
                        <h4>Payment Status</h4>
                        <div className={styles.badgeGroup}>
                            <Badge label="Paid" type="active" />
                            <Badge label="Pending" type="default" />
                            <Badge label="Failed" type="inactive" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Labels Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Custom Labels</h3>
                <div className={styles.badgeRow}>
                    <Badge label="New" type="active" size="small" />
                    <Badge label="Coming Soon" type="default" size="small" />
                    <Badge label="Deprecated" type="inactive" size="small" />
                    <Badge label="v2.0" type="active" size="small" />
                    <Badge label="Limited" type="default" size="small" />
                    <Badge label="Sold Out" type="inactive" size="small" />
                </div>
            </div>

            {/* In Context Examples */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>In Context Examples</h3>

                <div className={styles.contextExamples}>
                    <div className={styles.contextItem}>
                        <div className={styles.contextHeader}>
                            <span className={styles.contextTitle}>John Doe</span>
                            <Badge label="Active" type="active" size="small" />
                        </div>
                        <p className={styles.contextText}>Last seen: 2 minutes ago</p>
                    </div>

                    <div className={styles.contextItem}>
                        <div className={styles.contextHeader}>
                            <span className={styles.contextTitle}>Premium Plan</span>
                            <Badge label="Active" type="active" size="small" />
                        </div>
                        <p className={styles.contextText}>Renews on: Jan 15, 2026</p>
                    </div>

                    <div className={styles.contextItem}>
                        <div className={styles.contextHeader}>
                            <span className={styles.contextTitle}>API Key #1234</span>
                            <Badge label="Inactive" type="inactive" size="small" />
                        </div>
                        <p className={styles.contextText}>Created: Dec 1, 2025</p>
                    </div>

                    <div className={styles.contextItem}>
                        <div className={styles.contextHeader}>
                            <span className={styles.contextTitle}>Feature: Dark Mode</span>
                            <Badge label="Beta" type="default" size="small" />
                        </div>
                        <p className={styles.contextText}>Available for testing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BadgeTest;
