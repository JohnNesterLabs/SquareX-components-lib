import React, { useState } from 'react';
import { Categories } from 'squarex-ui-component-lib';
import styles from './CategoriesTest.module.css';

const MOCK_CATEGORIES = [
    {
        title: 'Development',
        items: [
            { id: 'd1', label: 'Frontend', type: 'default' },
            { id: 'd2', label: 'Backend', type: 'default' },
            { id: 'd3', label: 'DevOps', type: 'default' },
        ],
    },
    {
        title: 'Design',
        items: [
            { id: 'g1', label: 'UI Design', type: 'default' },
            { id: 'g2', label: 'UX Research', type: 'default' },
            { id: 'g3', label: 'Graphic Design', type: 'default' },
        ],
    },
    {
        title: 'Marketing',
        items: [
            { id: 'm1', label: 'SEO', type: 'default' },
            { id: 'm2', label: 'Content', type: 'default' },
            { id: 'm3', label: 'Email', type: 'default' },
        ],
    },
];

const CategoriesTest = () => {
    const [singleSelectionData, setSingleSelectionData] = useState(MOCK_CATEGORIES);
    const [singleChips, setSingleChips] = useState([]);

    const handleSingleItemClick = (item, categoryIndex) => {
        const newData = singleSelectionData.map(cat => ({
            ...cat,
            items: cat.items.map(i => {
                const isSelected = i.id === item.id ? !i.checked : false;
                return {
                    ...i,
                    checked: isSelected,
                    type: 'default'
                };
            })
        }));
        setSingleSelectionData(newData);

        // Update chips
        const selectedItem = newData.flatMap(cat => cat.items).find(i => i.checked);
        if (selectedItem) {
            setSingleChips([{ label: selectedItem.label, id: selectedItem.id }]);
        } else {
            setSingleChips([]);
        }
    };

    const handleChipRemove = (chip) => {
        setSingleChips(singleChips.filter(c => c.id !== chip.id));
        // Also uncheck the item and reset type
        const newData = singleSelectionData.map(cat => ({
            ...cat,
            items: cat.items.map(item => {
                if (item.id === chip.id) {
                    return { ...item, checked: false, type: 'default' };
                }
                return item;
            })
        }));
        setSingleSelectionData(newData);
    };

    // Multi Selection Logic
    const [multiSelectionData, setMultiSelectionData] = useState(JSON.parse(JSON.stringify(MOCK_CATEGORIES)));
    const [multiChips, setMultiChips] = useState([]);

    const handleMultiItemClick = (item, categoryIndex) => {
        const newData = multiSelectionData.map((cat, idx) => {
            if (idx !== categoryIndex) return cat;
            return {
                ...cat,
                items: cat.items.map(i => {
                    if (i.id !== item.id) return i;
                    const isSelected = !i.checked;
                    return {
                        ...i,
                        checked: isSelected,
                        type: 'default'
                    };
                })
            };
        });
        setMultiSelectionData(newData);

        // Update chips based on all checked items across all categories
        const newChips = newData
            .flatMap(cat => cat.items)
            .filter(i => i.checked)
            .map(i => ({ label: i.label, id: i.id }));
        setMultiChips(newChips);
    };

    const handleMultiChipRemove = (chip) => {
        // Uncheck the item and reset type
        const newData = multiSelectionData.map(cat => ({
            ...cat,
            items: cat.items.map(item => {
                if (item.id === chip.id) {
                    return { ...item, checked: false, type: 'default' };
                }
                return item;
            })
        }));
        setMultiSelectionData(newData);

        // Update chips
        setMultiChips(multiChips.filter(c => c.id !== chip.id));
    };

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Categories Component Test</h2>

            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Interactive Demo</h3>
                <div className={styles.demoContainer}>

                    <div className={styles.demoWrapper}>
                        <p className={styles.demoLabel}>Single Selection</p>
                        <Categories
                            categories={singleSelectionData}
                            chips={singleChips}
                            onItemClick={handleSingleItemClick}
                            onChipRemove={handleChipRemove}
                            onCancel={() => console.log('Cancel clicked')}
                            onApply={() => console.log('Apply clicked')}
                        />
                        <div className={styles.stateDisplay}>
                            <p className={styles.stateTitle}>Selected Chips:</p>
                            <div className={styles.jsonDisplay}>
                                {JSON.stringify(singleChips, null, 2)}
                            </div>
                        </div>
                    </div>

                    <div className={styles.demoWrapper}>
                        <p className={styles.demoLabel}>Multi Selection</p>
                        <Categories
                            variant="multiple"
                            categories={multiSelectionData}
                            chips={multiChips}
                            onItemClick={handleMultiItemClick}
                            onChipRemove={handleMultiChipRemove}
                            onCancel={() => console.log('Cancel clicked')}
                            onApply={() => console.log('Apply clicked')}
                        />
                        <div className={styles.stateDisplay}>
                            <p className={styles.stateTitle}>Selected Chips:</p>
                            <div className={styles.jsonDisplay}>
                                {JSON.stringify(multiChips, null, 2)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategoriesTest;
