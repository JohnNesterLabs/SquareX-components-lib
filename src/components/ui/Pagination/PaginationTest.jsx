import React, { useState } from 'react';
import Pagination from './Pagination';
import styles from './PaginationTest.module.css';

/**
 * PaginationTest Component
 * 
 * A test component to demonstrate all Pagination functionality.
 */
const PaginationTest = () => {
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);
    const [currentPage3, setCurrentPage3] = useState(5);
    const [currentPage4, setCurrentPage4] = useState(35);
    const [currentPage5, setCurrentPage5] = useState(1);

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Pagination Component Test</h2>

            {/* Interactive Test Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Interactive Testing - Click to Navigate</h3>

                <div className={styles.testItem}>
                    <h4>Small Page Count (5 pages)</h4>
                    <p className={styles.description}>
                        When total pages is small, all page numbers are shown
                    </p>
                    <Pagination
                        currentPage={currentPage1}
                        totalPages={5}
                        onPageChange={(page) => {
                            console.log('Page changed to:', page);
                            setCurrentPage1(page);
                        }}
                    />
                    <p className={styles.status}>Current Page: {currentPage1} / 5</p>
                </div>

                <div className={styles.testItem}>
                    <h4>Medium Page Count (10 pages)</h4>
                    <p className={styles.description}>
                        Ellipsis appears when needed
                    </p>
                    <Pagination
                        currentPage={currentPage2}
                        totalPages={10}
                        onPageChange={(page) => {
                            console.log('Page changed to:', page);
                            setCurrentPage2(page);
                        }}
                    />
                    <p className={styles.status}>Current Page: {currentPage2} / 10</p>
                </div>

                <div className={styles.testItem}>
                    <h4>Large Page Count (68 pages) - Start</h4>
                    <p className={styles.description}>
                        Matches the Figma design with ellipsis
                    </p>
                    <Pagination
                        currentPage={currentPage3}
                        totalPages={68}
                        onPageChange={(page) => {
                            console.log('Page changed to:', page);
                            setCurrentPage3(page);
                        }}
                    />
                    <p className={styles.status}>Current Page: {currentPage3} / 68</p>
                </div>

                <div className={styles.testItem}>
                    <h4>Large Page Count (68 pages) - Middle</h4>
                    <p className={styles.description}>
                        Shows ellipsis on both sides when in the middle
                    </p>
                    <Pagination
                        currentPage={currentPage4}
                        totalPages={68}
                        onPageChange={(page) => {
                            console.log('Page changed to:', page);
                            setCurrentPage4(page);
                        }}
                    />
                    <p className={styles.status}>Current Page: {currentPage4} / 68</p>
                </div>
            </div>

            {/* Configuration Options */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Configuration Options</h3>

                <div className={styles.testGrid}>
                    <div className={styles.testItem}>
                        <h4>Without Previous/Next Buttons</h4>
                        <Pagination
                            currentPage={currentPage5}
                            totalPages={10}
                            showPrevNext={false}
                            onPageChange={(page) => setCurrentPage5(page)}
                        />
                        <p className={styles.status}>Current Page: {currentPage5} / 10</p>
                    </div>

                    <div className={styles.testItem}>
                        <h4>Custom Sibling Count (2)</h4>
                        <p className={styles.description}>
                            Shows 2 pages on each side of current page
                        </p>
                        <Pagination
                            currentPage={5}
                            totalPages={20}
                            siblingCount={2}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>

                    <div className={styles.testItem}>
                        <h4>First Page (Disabled Previous)</h4>
                        <Pagination
                            currentPage={1}
                            totalPages={10}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>

                    <div className={styles.testItem}>
                        <h4>Last Page (Disabled Next)</h4>
                        <Pagination
                            currentPage={10}
                            totalPages={10}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>
                </div>
            </div>

            {/* Visual States */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Visual States Overview</h3>

                <div className={styles.statesGrid}>
                    <div className={styles.stateItem}>
                        <h4>Default State</h4>
                        <Pagination
                            currentPage={1}
                            totalPages={5}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>With Ellipsis (Left)</h4>
                        <Pagination
                            currentPage={8}
                            totalPages={10}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>With Ellipsis (Right)</h4>
                        <Pagination
                            currentPage={2}
                            totalPages={10}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>With Ellipsis (Both)</h4>
                        <Pagination
                            currentPage={15}
                            totalPages={30}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Single Page</h4>
                        <Pagination
                            currentPage={1}
                            totalPages={1}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>

                    <div className={styles.stateItem}>
                        <h4>Two Pages</h4>
                        <Pagination
                            currentPage={1}
                            totalPages={2}
                            onPageChange={(page) => console.log('Page:', page)}
                        />
                    </div>
                </div>
            </div>

            {/* Real-world Example */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Real-world Example</h3>

                <div className={styles.exampleContainer}>
                    <div className={styles.dataTable}>
                        <div className={styles.tableHeader}>
                            <span>Item</span>
                            <span>Description</span>
                        </div>
                        {Array.from({ length: 10 }, (_, i) => (
                            <div key={i} className={styles.tableRow}>
                                <span>Item {(currentPage1 - 1) * 10 + i + 1}</span>
                                <span>Description for item {(currentPage1 - 1) * 10 + i + 1}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.paginationWrapper}>
                        <Pagination
                            currentPage={currentPage1}
                            totalPages={20}
                            onPageChange={(page) => {
                                console.log('Table page changed to:', page);
                                setCurrentPage1(page);
                            }}
                        />
                        <p className={styles.pageInfo}>
                            Showing {(currentPage1 - 1) * 10 + 1}-{Math.min(currentPage1 * 10, 200)} of 200 items
                        </p>
                    </div>
                </div>
            </div>

            {/* Console Log Section */}
            <div className={styles.testSection}>
                <h3 className={styles.sectionTitle}>Console Logs</h3>
                <p className={styles.instruction}>
                    Open your browser's developer console to see page change events when you click on pagination buttons.
                </p>
            </div>
        </div>
    );
};

export default PaginationTest;
