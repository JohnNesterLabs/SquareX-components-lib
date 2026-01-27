import React from 'react';
import { StatusIndicator } from 'squarex-ui-component-lib';
import styles from './StatusIndicatorTest.module.css';

const StatusIndicatorTest = () => {
    const statusStates = [
        { key: 'default', label: 'Default' },
        { key: 'hover', label: 'Hover' },
        { key: 'pressed', label: 'Pressed' },
        { key: 'active', label: 'Active' },
        { key: 'disabled', label: 'Disabled' },
    ];

    const colors = [
        { key: 'green', label: 'Green' },
        { key: 'yellow', label: 'Yellow' },
        { key: 'red', label: 'Red' },
        { key: 'blue', label: 'Blue' },
    ];

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>StatusIndicator Component</h2>

            <div className={styles.testSection}>
                <div className={styles.grid}>
                    {colors.map((color) => (
                        <React.Fragment key={color.key}>
                            {statusStates.map((state) => (
                                <div key={`${color.key}-${state.key}`} className={styles.gridItem}>
                                    <span className={styles.stateLabel}>
                                        {color.label} - {state.label}
                                    </span>
                                    <StatusIndicator
                                        label="Status"
                                        state={state.key}
                                        color={color.key}
                                    />
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Sizes</h3>
                <div className={styles.flexRow}>
                    <div className={styles.gridItem}>
                        <span className={styles.stateLabel}>Small</span>
                        <StatusIndicator label="Status" size="small" color="green" />
                    </div>
                    <div className={styles.gridItem}>
                        <span className={styles.stateLabel}>Medium</span>
                        <StatusIndicator label="Status" size="medium" color="green" />
                    </div>
                    <div className={styles.gridItem}>
                        <span className={styles.stateLabel}>Large</span>
                        <StatusIndicator label="Status" size="large" color="green" />
                    </div>
                </div>
            </div>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Interactive</h3>
                <div className={styles.flexRow}>
                    <StatusIndicator
                        label="Click Me"
                        color="blue"
                        onClick={() => alert('Status clicked!')}
                    />
                </div>
            </div>
        </div>
    );
};

export default StatusIndicatorTest;
