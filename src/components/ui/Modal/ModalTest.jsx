import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './ModalTest.module.css';

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
                        // eslint-disable-next-line react/style-prop-object
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
                        // eslint-disable-next-line react/style-prop-object
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
                icon={<Icon name="GreenTick" size={72} />}
                actions={[
                    <Button
                        key="details"
                        label="View details"
                        // eslint-disable-next-line react/style-prop-object
                        style="neutral"
                        size="medium"
                        showLeadingIcon={false}
                        showTrailingIcon={true}
                        trailingIcon={<Icon name="ArrowRight" size={14} />}
                        onClick={() => console.log('View details')}
                    />,
                    <Button
                        key="create"
                        label="Create new list now"
                        // eslint-disable-next-line react/style-prop-object
                        style="primary"
                        size="medium"
                        showLeadingIcon={true}
                        leadingIcon={<Icon name="Plus" size={14} variant="white" />}
                        onClick={() => console.log('Create list')}
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
                        // eslint-disable-next-line react/style-prop-object
                        style="neutral"
                        onClick={() => setShowSimpleModal(false)}
                    />
                }
            />
        </div>
    );
};

export default ModalTest;
