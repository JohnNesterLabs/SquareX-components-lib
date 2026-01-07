import React, { useState } from 'react';
import DropdownNested from './DropdownNested';
import styles from './DropdownNestedTest.module.css';

const DropdownNestedTest = () => {
    const [leftState, setLeftState] = useState({
        title: 'Select a Member',
        chips: [
            { label: 'Item 1', id: 'li1' },
            { label: 'Item 2', id: 'li2' },
            { label: 'Item 3', id: 'li3' },
            { label: 'Item 4', id: 'li4' },
            { label: 'Item 5', id: 'li5' },
            { label: 'Item 6', id: 'li6' },
        ],
        items: [
            { label: 'Item 1', id: 'li1', hasCheckbox: true, checked: true },
            { label: 'Item 2', id: 'li2', hasCheckbox: true, checked: true },
            { label: 'Item 3', id: 'li3', hasCheckbox: true, checked: true },
            { label: 'Item 4', id: 'li4', hasCheckbox: true, checked: true },
            { label: 'Item 5', id: 'li5', hasCheckbox: true, checked: true },
            { label: 'Item 6', id: 'li6', hasCheckbox: true, checked: true },
        ],
    });

    const [rightState, setRightState] = useState({
        title: 'Select a Group',
        chips: [
            { label: 'Item 1', id: 'ri1' },
            { label: 'Item 2', id: 'ri2' },
            { label: 'Item 3', id: 'ri3' },
            { label: 'Item 4', id: 'ri4' },
            { label: 'Item 5', id: 'ri5' },
            { label: 'Item 6', id: 'ri6' },
        ],
        items: [
            { label: 'Item 1', id: 'ri1', hasCheckbox: true, checked: true },
            { label: 'Item 2', id: 'ri2', hasCheckbox: true, checked: true },
            { label: 'Item 3', id: 'ri3', hasCheckbox: true, checked: true },
            { label: 'Item 4', id: 'ri4', hasCheckbox: true, checked: true },
            { label: 'Item 5', id: 'ri5', hasCheckbox: true, checked: true },
            { label: 'Item 6', id: 'ri6', hasCheckbox: true, checked: true },
        ],
    });

    const handleLeftClearAll = () => {
        setLeftState(prev => ({
            ...prev,
            chips: [],
            items: prev.items.map(item => ({ ...item, checked: false }))
        }));
    };

    const handleRightClearAll = () => {
        setRightState(prev => ({
            ...prev,
            chips: [],
            items: prev.items.map(item => ({ ...item, checked: false }))
        }));
    };

    const handleLeftChipRemove = (chip) => {
        setLeftState(prev => ({
            ...prev,
            chips: prev.chips.filter(c => c.id !== chip.id),
            items: prev.items.map(item => item.id === chip.id ? { ...item, checked: false } : item)
        }));
    };

    const handleRightChipRemove = (chip) => {
        setRightState(prev => ({
            ...prev,
            chips: prev.chips.filter(c => c.id !== chip.id),
            items: prev.items.map(item => item.id === chip.id ? { ...item, checked: false } : item)
        }));
    };

    const handleLeftItemClick = (item) => {
        setLeftState(prev => {
            const isChecked = !item.checked;
            const newItems = prev.items.map(i => i.id === item.id ? { ...i, checked: isChecked } : i);
            const newChips = isChecked
                ? [...prev.chips, { label: item.label, id: item.id }]
                : prev.chips.filter(c => c.id !== item.id);

            return {
                ...prev,
                items: newItems,
                chips: newChips
            };
        });
    };

    const handleRightItemClick = (item) => {
        setRightState(prev => {
            const isChecked = !item.checked;
            const newItems = prev.items.map(i => i.id === item.id ? { ...i, checked: isChecked } : i);
            const newChips = isChecked
                ? [...prev.chips, { label: item.label, id: item.id }]
                : prev.chips.filter(c => c.id !== item.id);

            return {
                ...prev,
                items: newItems,
                chips: newChips
            };
        });
    };

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>DropdownNested Component</h2>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Default</h3>
                <div className={styles.demoBox}>
                    <DropdownNested
                        leftColumn={leftState}
                        rightColumn={rightState}
                        onLeftClearAll={handleLeftClearAll}
                        onRightClearAll={handleRightClearAll}
                        onLeftChipRemove={handleLeftChipRemove}
                        onRightChipRemove={handleRightChipRemove}
                        onLeftItemClick={handleLeftItemClick}
                        onRightItemClick={handleRightItemClick}
                        onCancel={() => console.log('Cancel clicked')}
                        onApply={() => console.log('Apply clicked', { leftState, rightState })}
                    />
                </div>
            </div>
        </div>
    );
};

export default DropdownNestedTest;
