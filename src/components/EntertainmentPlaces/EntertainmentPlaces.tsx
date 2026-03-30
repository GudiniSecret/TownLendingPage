import React, { useState } from 'react';
import type { EntertainmentPlace } from '../../data/data';
import styles from './EntertainmentPlaces.module.css';

interface EntertainmentPlacesProps {
  initialPlaces: EntertainmentPlace[];
}

const EntertainmentPlaces: React.FC<EntertainmentPlacesProps> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState<EntertainmentPlace[]>(initialPlaces);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('');
  const [newAddress, setNewAddress] = useState('');

  const handleAddPlace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newType.trim() || !newAddress.trim()) return;
    const newId = Math.max(0, ...places.map(p => p.id)) + 1;
    setPlaces([...places, { id: newId, name: newName, type: newType, address: newAddress }]);
    setNewName('');
    setNewType('');
    setNewAddress('');
    setShowForm(false);
  };

  return (
    <section id="entertainment" className={styles.entertainment}>
      <div className={styles.container}>
        <h2>Места для отдыха и развлечений</h2>
        <div className={styles.placesGrid}>
          {places.map(place => (
            <div key={place.id} className={styles.placeCard}>
              <h3 className={styles.placeName}>{place.name}</h3>
              <p className={styles.placeType}>{place.type}</p>
              <p className={styles.placeAddress}>📍 {place.address}</p>
            </div>
          ))}
        </div>
        
        <button className={styles.addButton} onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Отмена' : '+ Добавить место'}
        </button>
        
        {showForm && (
          <form className={styles.form} onSubmit={handleAddPlace}>
            <input
              type="text"
              placeholder="Название"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Тип"
              value={newType}
              onChange={e => setNewType(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Адрес"
              value={newAddress}
              onChange={e => setNewAddress(e.target.value)}
              required
            />
            <button type="submit">Добавить</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EntertainmentPlaces;