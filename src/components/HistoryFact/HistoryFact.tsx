import React, { useState } from 'react';
import styles from './HistoryFact.module.css';

interface HistoryFactProps {
  short: string;
  full: string;
}

const HistoryFact: React.FC<HistoryFactProps> = ({ short, full }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="history" className={styles.history}>
      <div className={styles.container}>
        <h2>Исторический факт</h2>
        <div className={styles.fact}>
          <p>{isExpanded ? full : short}</p>
          <button
            className={styles.toggleButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Свернуть' : 'Подробнее'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HistoryFact;