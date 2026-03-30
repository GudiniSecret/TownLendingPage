import React, { useState } from 'react';
import type { Monument } from '../../data/data';
import styles from './Monuments.module.css';

type SortType = 'name' | 'year';

interface MonumentsProps {
  monuments: Monument[];
}

const Monuments: React.FC<MonumentsProps> = ({ monuments }) => {
  const [sortBy, setSortBy] = useState<SortType>('name');
  const [sortedMonuments, setSortedMonuments] = useState<Monument[]>([...monuments]);

  const handleSort = (type: SortType) => {
    setSortBy(type);
    const sorted = [...monuments].sort((a, b) => {
      if (type === 'name') return a.name.localeCompare(b.name);
      return a.year - b.year;
    });
    setSortedMonuments(sorted);
  };

  return (
    <section id="monuments" className={styles.monuments}>
      <div className={styles.container}>
        <h2>Памятники</h2>
        <div className={styles.sortButtons}>
          <button
            onClick={() => handleSort('name')}
            className={sortBy === 'name' ? styles.active : ''}
          >
            Сортировать по названию
          </button>
          <button
            onClick={() => handleSort('year')}
            className={sortBy === 'year' ? styles.active : ''}
          >
            Сортировать по году
          </button>
        </div>
        <div className={styles.monumentsGrid}>
          {sortedMonuments.map(mon => (
            <div key={mon.id} className={styles.monumentCard}>
              <h3 className={styles.monumentName}>{mon.name}</h3>
              <p className={styles.monumentYear}>{mon.year} год</p>
              <p className={styles.monumentDescription}>{mon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Monuments;