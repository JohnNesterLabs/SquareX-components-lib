import React from 'react';
import ChipList from './ChipList';
import styles from './ChipListTest.module.css';

const ChipListTest = () => {
    const singleRowChips = [
        { label: 'Label', id: '1' },
        { label: 'Label', id: '2' },
        { label: 'Label', id: '3' },
    ];

    const doubleRowChips = [
        { label: 'Label', id: '1' },
        { label: 'Label', id: '2' },
        { label: 'Label', id: '3' },
        { label: 'Label', id: '4' },
        { label: 'Label', id: '5' },
        { label: 'Label', id: '6' },
    ];

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Chip List Component</h2>

            <div className={styles.testSection}>
                <div className={styles.testItem}>
                    <h3 className={styles.sectionTitle}>Single Row</h3>
                    <ChipList
                        chips={singleRowChips}
                        layout="single"
                        onChipRemove={(chip) => console.log('Removed:', chip)}
                    />
                </div>

                <div className={styles.testItem}>
                    <h3 className={styles.sectionTitle}>Double Row</h3>
                    <ChipList
                        chips={doubleRowChips}
                        layout="double"
                        onChipRemove={(chip) => console.log('Removed:', chip)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChipListTest;
