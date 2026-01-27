import React from 'react';
import { Chip } from 'squarex-ui-component-lib';
import styles from './ChipTest.module.css';

const ChipTest = () => {
    const chipStates = [
        { key: 'default', label: 'Default' },
        { key: 'hover', label: 'Hover' },
        { key: 'pressed', label: 'Pressed' },
        { key: 'active', label: 'Active' },
    ];

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Chip Component</h2>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Medium (14px)</h3>
                <div className={styles.grid}>
                    {chipStates.map((state) => (
                        <div key={`medium-${state.key}`} className={styles.gridItem}>
                            <span className={styles.stateLabel}>{state.label}</span>
                            <Chip
                                label="Label"
                                showRightIcon={true}
                                showLeftIcon={true}
                                state={state.key}
                                size="medium"
                                onRemove={() => console.log('Chip removed')}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Small (12px)</h3>
                <div className={styles.grid}>
                    {chipStates.map((state) => (
                        <div key={`small-${state.key}`} className={styles.gridItem}>
                            <span className={styles.stateLabel}>{state.label}</span>
                            <Chip
                                label="Label"
                                showRightIcon={true}
                                showLeftIcon={true}
                                state={state.key}
                                size="small"
                                onRemove={() => console.log('Chip removed')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChipTest;
