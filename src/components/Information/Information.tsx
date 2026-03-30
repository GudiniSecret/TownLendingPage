import React from 'react';
import styles from './Information.module.css';

interface InformationProps {
  cityName: string;
  description: string;
}

const Information: React.FC<InformationProps> = ({ cityName, description }) => {
  return (
    <section id="info" className={styles.info}>
      <div className={styles.container}>
        <h2>О городе {cityName}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default Information;