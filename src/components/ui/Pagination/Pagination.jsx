import React from 'react';
import styles from './Pagination.module.css';

/**
 * Pagination Component
 * 
 * A pagination component with previous/next buttons and page numbers.
 * Supports ellipsis for large page ranges.
 * 
 * @param {number} currentPage - Current active page (1-indexed)
 * @param {number} totalPages - Total number of pages
 * @param {function} onPageChange - Callback when page changes
 * @param {number} siblingCount - Number of page buttons to show on each side of current page (default: 1)
 * @param {boolean} showPrevNext - Whether to show Previous/Next buttons (default: true)
 * @param {string} className - Additional CSS classes
 */
const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    siblingCount = 1,
    showPrevNext = true,
    className = '',
    ...props
}) => {
    // Generate page numbers array with ellipsis
    const getPageNumbers = () => {
        const totalNumbers = siblingCount * 2 + 3; // siblings + current + first + last
        const totalBlocks = totalNumbers + 2; // + 2 for ellipsis

        if (totalPages <= totalBlocks) {
            // Show all pages if total is small
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const showLeftEllipsis = leftSiblingIndex > 2;
        const showRightEllipsis = rightSiblingIndex < totalPages - 1;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!showLeftEllipsis && showRightEllipsis) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, '...', totalPages];
        }

        if (showLeftEllipsis && !showRightEllipsis) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = Array.from(
                { length: rightItemCount },
                (_, i) => totalPages - rightItemCount + i + 1
            );
            return [firstPageIndex, '...', ...rightRange];
        }

        if (showLeftEllipsis && showRightEllipsis) {
            const middleRange = Array.from(
                { length: rightSiblingIndex - leftSiblingIndex + 1 },
                (_, i) => leftSiblingIndex + i
            );
            return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
        }

        return [];
    };

    const pageNumbers = getPageNumbers();

    const handlePageClick = (page) => {
        if (page === '...' || page === currentPage) return;
        if (onPageChange) {
            onPageChange(page);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1 && onPageChange) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages && onPageChange) {
            onPageChange(currentPage + 1);
        }
    };

    const containerClassNames = [
        styles.pagination,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={containerClassNames} {...props}>
            {/* Previous Button */}
            {showPrevNext && (
                <button
                    className={`${styles.navButton} ${styles.prevButton} ${currentPage === 1 ? styles.disabled : ''
                        }`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <div
                        className={styles.navIcon}
                        style={{
                            WebkitMaskImage: "url('/icon/ArrowLeft.svg')",
                            maskImage: "url('/icon/ArrowLeft.svg')"
                        }}
                    />
                    <span className={styles.navText}>Previous</span>
                </button>
            )}

            {/* Page Numbers */}
            <div className={styles.pageNumbers}>
                {pageNumbers.map((page, index) => {
                    if (page === '...') {
                        return (
                            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                                ...
                            </span>
                        );
                    }

                    return (
                        <button
                            key={page}
                            className={`${styles.pageButton} ${page === currentPage ? styles.active : ''
                                }`}
                            onClick={() => handlePageClick(page)}
                            aria-label={`Page ${page}`}
                            aria-current={page === currentPage ? 'page' : undefined}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            {/* Next Button */}
            {showPrevNext && (
                <button
                    className={`${styles.navButton} ${styles.nextButton} ${currentPage === totalPages ? styles.disabled : ''
                        }`}
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <span className={styles.navText}>Next</span>
                    <div
                        className={styles.navIcon}
                        style={{
                            WebkitMaskImage: "url('/icon/ArrowRight.svg')",
                            maskImage: "url('/icon/ArrowRight.svg')"
                        }}
                    />
                </button>
            )}
        </div>
    );
};

export default Pagination;
