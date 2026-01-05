import React, { useState } from 'react';
import TabList from './TabList';
import styles from './TabTest.module.css';

const TabTest = () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    const [activeTab2, setActiveTab2] = useState('tab1');

    const sampleTabs = [
        { id: 'tab1', label: 'Overview', count: 100 },
        { id: 'tab2', label: 'Analytics', count: 100 },
        { id: 'tab3', label: 'Reports', count: 100 },
        { id: 'tab4', label: 'Settings', count: 100 },
        { id: 'tab5', label: 'Users', count: 100 },
        { id: 'tab6', label: 'Billing', count: 100 },
        { id: 'tab7', label: 'Security', count: 100 },
        { id: 'tab8', label: 'Integrations', count: 100 },
    ];

    const mixedTabs = [
        { id: 'tab1', label: 'Active', count: 100 },
        { id: 'tab2', label: 'Inactive', count: 100 },
        { id: 'tab3', label: 'Disabled', count: 100, disabled: true },
        { id: 'tab4', label: 'Simple', count: null },
    ];

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Tab List Component</h2>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Tab List Navigation</h3>
                <div className={styles.demoBox}>
                    <TabList
                        tabs={sampleTabs}
                        activeTabId={activeTab1}
                        onTabChange={setActiveTab1}
                    />
                </div>
            </div>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>States Overview</h3>
                <div className={styles.demoBox}>
                    <TabList
                        tabs={mixedTabs}
                        activeTabId={activeTab2}
                        onTabChange={setActiveTab2}
                    />
                </div>
            </div>
        </div>
    );
};

export default TabTest;
