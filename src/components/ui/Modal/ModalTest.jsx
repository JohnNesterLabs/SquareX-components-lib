import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import styles from './ModalTest.module.css';

const SuccessIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#00B050" />
        <path d="M26.6667 40L35.5556 48.8889L53.3334 31.1111" stroke="white" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ModalTest = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showSimpleModal, setShowSimpleModal] = useState(false);

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Modal Component Test</h2>

            <div className={styles.grid}>
                {/* Success Modal Example (Figma Design) */}
                <div className={styles.card}>
                    <h3>Success Modal (Figma Design)</h3>
                    <p>Matches the "New Category Created" design.</p>
                    <Button
                        label="Open Success Modal"
                        style="primary"
                        onClick={() => setShowSuccessModal(true)}
                    />
                </div>

                {/* Simple Modal Example */}
                <div className={styles.card}>
                    <h3>Simple Modal</h3>
                    <p>Basic title and description.</p>
                    <Button
                        label="Open Simple Modal"
                        style="neutral"
                        onClick={() => setShowSimpleModal(true)}
                    />
                </div>
            </div>

            {/* Actual Modals */}

            {/* 1. Success Modal */}
            <Modal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="New Category Created"
                description="You may create a new list under the 'Gaming' category now, or choose the category later when starting a new list."
                icon={<SuccessIcon />}
                actions={[
                    <Button
                        key="details"
                        label="View details"
                        style="neutral"
                        size="medium"
                        showTrailingIcon={true}
                        onClick={() => console.log('View details')}
                        className={styles.actionButton}
                    />,
                    <Button
                        key="create"
                        label="Create new list now"
                        style="primary"
                        size="medium"
                        showLeadingIcon={true}
                        onClick={() => console.log('Create list')}
                        className={styles.actionButton}
                    />
                ]}
            />

            {/* 2. Simple Modal */}
            <Modal
                isOpen={showSimpleModal}
                onClose={() => setShowSimpleModal(false)}
                title="Simple Modal"
                description="This is a basic modal with just text and a close button."
                size="small"
                actions={
                    <Button
                        label="Close"
                        style="neutral"
                        onClick={() => setShowSimpleModal(false)}
                    />
                }
            />
        </div>
    );
};

export default ModalTest;
