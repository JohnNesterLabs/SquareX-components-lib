import React from 'react';
import Avatar from './Avatar';
import AvatarGroup from './AvatarGroup';
import AvatarBlock from './AvatarBlock';
import styles from './AvatarTest.module.css';

const AvatarTest = () => {
    const sampleImage = "https://i.pravatar.cc/150?u=squarex";
    const groupAvatars = [
        { src: "https://i.pravatar.cc/150?u=1", initials: "JD" },
        { src: "https://i.pravatar.cc/150?u=2", initials: "AS" },
        { src: "", initials: "AP" },
        { src: "https://i.pravatar.cc/150?u=4", initials: "MK" },
        { src: "https://i.pravatar.cc/150?u=5", initials: "TH" },
    ];

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testTitle}>Avatar Component</h2>

            {/* Base Avatars Section */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Base Avatars (Sizes & Shapes)</h3>
                <div className={styles.grid}>
                    {/* Large */}
                    <div className={styles.row}>
                        <div className={styles.label}>Large (40px)</div>
                        <div className={styles.demoRow}>
                            <Avatar src={sampleImage} size="large" shape="circle" />
                            <Avatar initials="AP" size="large" shape="circle" />
                            <Avatar src={sampleImage} size="large" shape="square" />
                            <Avatar initials="AP" size="large" shape="square" />
                        </div>
                    </div>
                    {/* Medium */}
                    <div className={styles.row}>
                        <div className={styles.label}>Medium (32px)</div>
                        <div className={styles.demoRow}>
                            <Avatar src={sampleImage} size="medium" shape="circle" />
                            <Avatar initials="AP" size="medium" shape="circle" />
                            <Avatar src={sampleImage} size="medium" shape="square" />
                            <Avatar initials="AP" size="medium" shape="square" />
                        </div>
                    </div>
                    {/* Small */}
                    <div className={styles.row}>
                        <div className={styles.label}>Small (24px)</div>
                        <div className={styles.demoRow}>
                            <Avatar src={sampleImage} size="small" shape="circle" />
                            <Avatar initials="AP" size="small" shape="circle" />
                            <Avatar src={sampleImage} size="small" shape="square" />
                            <Avatar initials="AP" size="small" shape="square" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Avatar Group Section */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Avatar Group</h3>
                <div className={styles.grid}>
                    <div className={styles.row}>
                        <div className={styles.label}>Spaced</div>
                        <div className={styles.demoRow}>
                            <AvatarGroup avatars={groupAvatars} layout="spaced" max={3} />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Overlap</div>
                        <div className={styles.demoRow}>
                            <AvatarGroup avatars={groupAvatars} layout="overlap" max={3} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Avatar Block Section */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Avatar Block</h3>
                <div className={styles.demoBox}>
                    <AvatarBlock
                        avatarProps={{ src: sampleImage, size: "medium", shape: "circle" }}
                        title="Title"
                        description="Description"
                    />
                </div>
            </div>
        </div>
    );
};

export default AvatarTest;
