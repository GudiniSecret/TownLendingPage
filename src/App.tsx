import React from 'react';
import { cityData } from './data/data';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import EntertainmentPlaces from './components/EntertainmentPlaces/EntertainmentPlaces';
import Monuments from './components/Monuments/Monuments';
import HistoryFact from './components/HistoryFact/HistoryFact';
import Footer from './components/Footer/Footer';
import './App.css'; // глобальные стили для контейнера

function App() {
  return (
    <div className="app">
      <Header cityName={cityData.name} />
      <main>
        <Information cityName={cityData.name} description={cityData.description} />
        <EntertainmentPlaces initialPlaces={cityData.entertainmentPlaces} />
        <Monuments monuments={cityData.monuments} />
        <HistoryFact short={cityData.historyFact.short} full={cityData.historyFact.full} />
      </main>
      <Footer />
    </div>
  );
}

export default App;