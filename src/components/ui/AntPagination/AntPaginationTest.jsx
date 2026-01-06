import React, { useState } from 'react';
import AntPagination from './AntPagination';
import styles from './AntPaginationTest.module.css';

const AntPaginationTest = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const onChange = (page, pSize) => {
        console.log('Page:', page, 'PageSize:', pSize);
        setCurrent(page);
        setPageSize(pSize);
    };

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.title}>Ant Design Pagination Showcase</h2>

            <section className={styles.section}>
                <h3>Basic Pagination</h3>
                <AntPagination defaultCurrent={1} total={50} />
            </section>

            <section className={styles.section}>
                <h3>More Pages</h3>
                <AntPagination defaultCurrent={6} total={500} />
            </section>

            <section className={styles.section}>
                <h3>Changer (Page Size)</h3>
                <AntPagination
                    showSizeChanger
                    onShowSizeChange={onChange}
                    defaultCurrent={3}
                    total={500}
                />
            </section>

            <section className={styles.section}>
                <h3>Quick Jumper</h3>
                <AntPagination
                    showQuickJumper
                    defaultCurrent={2}
                    total={500}
                    onChange={onChange}
                />
            </section>

            <section className={styles.section}>
                <h3>Small Size</h3>
                <AntPagination size="small" total={50} />
            </section>

            <section className={styles.section}>
                <h3>Simple Mode</h3>
                <AntPagination simple defaultCurrent={2} total={50} />
            </section>

            <section className={styles.section}>
                <h3>Show Total</h3>
                <AntPagination
                    total={85}
                    showTotal={(total) => `Total ${total} items`}
                    defaultPageSize={20}
                    defaultCurrent={1}
                />
                <br />
                <AntPagination
                    total={85}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={20}
                    defaultCurrent={1}
                />
            </section>

            <section className={styles.section}>
                <h3>Disabled</h3>
                <AntPagination disabled total={50} showSizeChanger showQuickJumper />
            </section>

            <section className={styles.section}>
                <h3>Controlled Component</h3>
                <div style={{ marginBottom: '10px' }}>Current Page: {current} | Page Size: {pageSize}</div>
                <AntPagination
                    current={current}
                    pageSize={pageSize}
                    total={500}
                    onChange={onChange}
                    showSizeChanger
                    showQuickJumper
                />
            </section>
        </div>
    );
};

export default AntPaginationTest;
