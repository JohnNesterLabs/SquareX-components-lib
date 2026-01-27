import React, { useState } from 'react';
import { TabList } from 'squarex-ui-component-lib';
import styles from './TabTest.module.css';

const TabTest = () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    const [activeTab2, setActiveTab2] = useState('tab1');

    const sampleTabs = [
        { key: 'tab1', label: 'Overview', count: 100 },
        { key: 'tab2', label: 'Analytics', count: 100 },
        { key: 'tab3', label: 'Reports', count: 100 },
        { key: 'tab4', label: 'Settings', count: 100 },
        { key: 'tab5', label: 'Users', count: 100 },
        { key: 'tab6', label: 'Billing', count: 100 },
        { key: 'tab7', label: 'Security', count: 100 },
        { key: 'tab8', label: 'Integrations', count: 100 },
    ];

    const mixedTabs = [
        { key: 'tab1', label: 'Active', count: 100 },
        { key: 'tab2', label: 'Inactive', count: 100 },
        { key: 'tab3', label: 'Disabled', count: 100, disabled: true },
        { key: 'tab4', label: 'Simple', count: null },
    ];

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Tab List Component</h2>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Tab List Navigation</h3>
                <div className={styles.demoBox}>
                    {sampleTabs && sampleTabs.length > 0 && (
                        <TabList
                            items={sampleTabs}
                            activeKey={activeTab1}
                            onChange={setActiveTab1}
                        />
                    )}
                </div>
            </div>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>States Overview</h3>
                <div className={styles.demoBox}>
                    {mixedTabs && mixedTabs.length > 0 && (
                        <TabList
                            items={mixedTabs}
                            activeKey={activeTab2}
                            onChange={setActiveTab2}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TabTest;
