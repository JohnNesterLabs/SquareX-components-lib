import React, { useState } from 'react';
import Tab from './Tab';
import styles from './TabTest.module.css';

/**
 * TabTest Component
 * 
 * A test component to demonstrate all Tab functionality.
 */
const TabTest = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Tab Component Test</h2>

            {/* States Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>States</h3>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <h4>Active</h4>
                        <Tab
                            label="Tab"
                            count="99+"
                            isActive={true}
                            onClick={() => { }}
                        />
                    </div>
                    <div className={styles.item}>
                        <h4>Default</h4>
                        <Tab
                            label="Tab"
                            count="99+"
                            isActive={false}
                            onClick={() => { }}
                        />
                    </div>
                    <div className={styles.item}>
                        <h4>Disabled</h4>
                        <Tab
                            label="Tab"
                            count="99+"
                            disabled={true}
                            onClick={() => { }}
                        />
                    </div>
                </div>
            </div>

            {/* Interactive Example */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Interactive Tabs</h3>
                <div className={styles.tabContainer}>
                    <div className={styles.tabList}>
                        <Tab
                            label="All Items"
                            count={120}
                            isActive={activeTab === 'tab1'}
                            onClick={() => setActiveTab('tab1')}
                        />
                        <Tab
                            label="Pending"
                            count={5}
                            isActive={activeTab === 'tab2'}
                            onClick={() => setActiveTab('tab2')}
                        />
                        <Tab
                            label="Completed"
                            isActive={activeTab === 'tab3'}
                            onClick={() => setActiveTab('tab3')}
                        />
                        <Tab
                            label="Archived"
                            count={0}
                            disabled={true}
                            isActive={activeTab === 'tab4'}
                            onClick={() => setActiveTab('tab4')}
                        />
                    </div>
                    <div className={styles.tabContent}>
                        {activeTab === 'tab1' && <p>Showing all 120 items...</p>}
                        {activeTab === 'tab2' && <p>Showing 5 pending items...</p>}
                        {activeTab === 'tab3' && <p>Showing completed items...</p>}
                    </div>
                </div>
            </div>

            {/* Variations */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Variations</h3>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <h4>Label Only</h4>
                        <Tab label="Simple Tab" isActive={false} />
                    </div>
                    <div className={styles.item}>
                        <h4>With Count</h4>
                        <Tab label="Notifications" count={3} isActive={false} />
                    </div>
                    <div className={styles.item}>
                        <h4>Long Label</h4>
                        <Tab label="Account Settings & Preferences" isActive={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabTest;
