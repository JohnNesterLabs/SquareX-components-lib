import React from 'react';
import styles from './BackgroundGradient.module.css';

const BackgroundGradient = ({ 
  className = '',
  mode = 'Light Mode BG',
  ...props 
}) => {
  return (
    <div 
      className={`${styles.container} ${className}`}
      data-mode={mode}
      {...props}
    >
      <div className={styles.background}>
        {/* Base Layer */}
        <div className={styles.base} />
        
        {/* Gradient Blobs Layer */}
        <div className={styles.gradientBlobs}>
          <div className={styles.gradientBlobsWrapper}>
            <img 
              className={styles.gradientBlobsImage}
              src="/images/gradient-blobs.svg" 
              alt="Gradient Blobs"
            />
          </div>
        </div>
        
        {/* Middle Layer */}
        <div className={styles.middleLayer} />
        
        {/* Noise Texture Layer */}
        <div 
          className={styles.noiseTexture}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/noise-texture.png)`
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundGradient;

