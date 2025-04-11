import React from 'react';
import styles from '@/styles/LoadingOverlay.css';

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
      </div>
    </div>
  );
};

export default LoadingOverlay; 