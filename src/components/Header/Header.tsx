import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  cityName: string;
}

const Header: React.FC<HeaderProps> = ({ cityName }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>{cityName}</h1>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#info">О городе</a></li>
            <li><a href="#entertainment">Развлечения</a></li>
            <li><a href="#monuments">Памятники</a></li>
            <li><a href="#history">Исторический факт</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;