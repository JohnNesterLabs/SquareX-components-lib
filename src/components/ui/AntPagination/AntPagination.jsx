import React from 'react';
import { Pagination, ConfigProvider } from 'antd';
import styles from './AntPagination.module.css';

/**
 * AntPagination Component
 * 
 * A wrapper around Ant Design's Pagination component with custom styling.
 * Supports all Ant Design Pagination features.
 * 
 * @param {Object} props - Ant Design Pagination props
 */
const AntPagination = (props) => {
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return (
                <div className={`${styles.navButtonCustom} ${props.disabled ? styles.disabled : ''}`}>
                    <div
                        className={styles.navIcon}
                        style={{
                            WebkitMaskImage: "url('/icon/ArrowLeft.svg')",
                            maskImage: "url('/icon/ArrowLeft.svg')"
                        }}
                    />
                    <span className={styles.navText}>Previous</span>
                </div>
            );
        }
        if (type === 'next') {
            return (
                <div className={`${styles.navButtonCustom} ${props.disabled ? styles.disabled : ''}`}>
                    <span className={styles.navText}>Next</span>
                    <div
                        className={styles.navIcon}
                        style={{
                            WebkitMaskImage: "url('/icon/ArrowRight.svg')",
                            maskImage: "url('/icon/ArrowRight.svg')"
                        }}
                    />
                </div>
            );
        }
        return originalElement;
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#4432bf',
                    borderRadius: 8,
                    fontFamily: "'Host Grotesk', sans-serif",
                    colorText: '#2f353b',
                    colorTextDescription: '#768494',
                    motion: false,
                },
                wave: {
                    disabled: true,
                },
                components: {
                    Pagination: {
                        itemActiveBg: '#4432bf',
                        itemActiveColor: '#F3EEF9',
                        itemBg: 'transparent',
                        itemInputBg: '#ffffff',
                        itemSize: 36,
                        itemSizeSM: 32,
                    },
                },
            }}
        >
            <div className={styles.paginationWrapper}>
                <Pagination itemRender={itemRender} {...props} />
            </div>
        </ConfigProvider>
    );
};

export default AntPagination;
