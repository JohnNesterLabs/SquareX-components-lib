import React from 'react';
import Breadcrumb from './Breadcrumb';
import styles from './BreadcrumbTest.module.css';
import Icon from '../Icon/Icon';

const BreadcrumbTest = () => {
    const basicItems = [
        { title: 'Home', href: '' },
        { title: 'Application Center', href: '' },
        { title: 'Application List', href: '' },
        { title: 'An Application' },
    ];

    const iconItems = [
        { title: 'Home', href: '', icon: 'House' },
        { title: 'User', href: '', icon: 'User' },
        { title: 'Settings', icon: 'Gear' },
    ];

    const menuItems = [
        { title: 'Home', href: '' },
        {
            title: 'General',
            href: '',
            menu: {
                items: [
                    { key: '1', label: 'Service' },
                    { key: '2', label: 'Product' },
                    { key: '3', label: 'Company' },
                ],
            },
        },
        { title: 'An Application' },
    ];

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Breadcrumb Component</h2>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Basic Usage</h3>
                <div className={styles.demoBox}>
                    <Breadcrumb items={basicItems} />
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>With Icons</h3>
                <div className={styles.demoBox}>
                    <Breadcrumb items={iconItems} />
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Custom Separator</h3>
                <div className={styles.demoBox}>
                    <Breadcrumb
                        items={basicItems}
                        separator={<Icon name="CaretRight" size={12} />}
                    />
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>With Dropdown Menu</h3>
                <div className={styles.demoBox}>
                    <Breadcrumb items={menuItems} />
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbTest;
