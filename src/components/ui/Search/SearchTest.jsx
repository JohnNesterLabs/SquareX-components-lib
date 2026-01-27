import React, { useState } from 'react';
import { Search } from 'squarex-ui-component-lib';
import ListSearch from '../ListSearch/ListSearch';
import styles from './SearchTest.module.css';

const SearchTest = () => {
    const [searchValue, setSearchValue] = useState('');
    const [listSearchValue, setListSearchValue] = useState('');
    const [chips, setChips] = useState([
        { label: 'Label', id: '1' },
        { label: 'Label', id: '2' },
        { label: 'Label', id: '3' },
    ]);

    const handleChipRemove = (index) => {
        setChips(chips.filter((_, i) => i !== index));
    };

    const searchStates = [
        { key: 'default', label: 'Default' },
        { key: 'hover', label: 'Hover' },
        { key: 'focused', label: 'Focused' },
        { key: 'typing', label: 'Typing' },
        { key: 'filled', label: 'Filled' },
        { key: 'filledHover', label: 'Filled in - Hover' },
        { key: 'error', label: 'Error' },
        { key: 'disabled', label: 'Disabled' },
    ];

    const listSearchStates = [
        { key: 'default', label: 'Default' },
        { key: 'hover', label: 'Hover' },
        { key: 'focused', label: 'Focused' },
        { key: 'typing', label: 'Typing' },
    ];


    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Search & ListSearch Interactive Demo</h2>

            <div className={styles.demoSection}>
                <h3 className={styles.demoSubtitle}>Interactive Search</h3>
                <div className={styles.interactiveRow}>
                    <div className={styles.componentWrapper}>
                        <Search
                            value={searchValue}
                            placeholder="Type to search..."
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <div className={styles.valueRow}>
                            <p className={styles.valueDisplay}>Current Value: {searchValue || '(empty)'}</p>
                            {searchValue && (
                                <button
                                    className={styles.clearButton}
                                    onClick={() => setSearchValue('')}
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={styles.infoWrapper}>
                        <p className={styles.infoText}>Hover over the search bar or click to focus and type. The component handles its own visual states naturally.</p>
                    </div>
                </div>
            </div>

            <div className={styles.demoSection}>
                <h3 className={styles.demoSubtitle}>Interactive ListSearch (Type 1)</h3>
                <div className={styles.interactiveRow}>
                    <div className={styles.componentWrapper}>
                        <ListSearch
                            label={listSearchValue || 'Search'}
                            chips={chips}
                            onChipRemove={handleChipRemove}
                            type="type1"
                            onChange={(e) => setListSearchValue(e.target.value)}
                        />
                        <div className={styles.inputControls}>
                            <p className={styles.valueDisplay}>Current Label: {listSearchValue || '(empty)'}</p>
                        </div>
                    </div>
                    <div className={styles.infoWrapper}>
                        <p className={styles.infoText}>This variant shows chips below the search bar. Interaction is fully automatic.</p>
                    </div>
                </div>
            </div>

            <div className={styles.demoSection}>
                <h3 className={styles.demoSubtitle}>Interactive ListSearch (Type 2)</h3>
                <div className={styles.interactiveRow}>
                    <div className={styles.componentWrapper}>
                        <ListSearch
                            label={listSearchValue || 'Search'}
                            chips={chips}
                            onChipRemove={handleChipRemove}
                            type="type2"
                            onChange={(e) => setListSearchValue(e.target.value)}
                        />
                        <div className={styles.inputControls}>
                            <p className={styles.valueDisplay}>Current Label: {listSearchValue || '(empty)'}</p>
                        </div>
                    </div>
                    <div className={styles.infoWrapper}>
                        <p className={styles.infoText}>This variant shows chips above the search bar. Interaction is fully automatic.</p>
                    </div>
                </div>
            </div>

            <div className={styles.divider} />


            <h2 className={styles.testTitle}>Visual States</h2>

            {/* Search Section */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Search Component States</h3>
                <div className={styles.grid}>
                    {searchStates.map((state) => (
                        <div key={state.key} className={styles.cell}>
                            <div className={styles.stateLabel}>{state.label}</div>
                            <Search
                                value={state.key === 'default' || state.key === 'hover' || state.key === 'focused' ? '' : 'Search'}
                                placeholder="Search"
                                error="Error"
                                hasError={state.key === 'error'}
                                state={state.key}
                                disabled={state.key === 'disabled'}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ListSearch Section - Type 1 */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>ListSearch Component - Type 1 States</h3>
                <div className={styles.grid}>
                    {listSearchStates.map((state) => (
                        <div key={state.key} className={styles.cell}>
                            <div className={styles.stateLabel}>{state.label}</div>
                            <ListSearch
                                label="Search"
                                chipList={true}
                                chips={chips}
                                type="type1"
                                state={state.key}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ListSearch Section - Type 2 */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>ListSearch Component - Type 2 States</h3>
                <div className={styles.grid}>
                    {listSearchStates.map((state) => (
                        <div key={state.key} className={styles.cell}>
                            <div className={styles.stateLabel}>{state.label}</div>
                            <ListSearch
                                label="Search"
                                chipList={true}
                                chips={chips}
                                type="type2"
                                state={state.key}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchTest;
