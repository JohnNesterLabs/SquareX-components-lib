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
      <img
        className={styles.gradientBlobsImage}
        src={`/bg/Mode=${mode}.svg`}
        alt={`${mode} Blobs`}
      />
    </div>
  );
};

export default BackgroundGradient;
