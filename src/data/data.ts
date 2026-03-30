export interface EntertainmentPlace {
  id: number;
  name: string;
  type: string;
  address: string;
}

export interface Monument {
  id: number;
  name: string;
  year: number;
  description: string;
}

export interface CityData {
  name: string;
  description: string;
  entertainmentPlaces: EntertainmentPlace[];
  monuments: Monument[];
  historyFact: {
    short: string;
    full: string;
  };
}

export const cityData: CityData = {
  name: 'Казань',
  description: 'Казань — столица Республики Татарстан, один из крупнейших экономических, научных, культурных и спортивных центров России. Город сочетает в себе древнюю историю и современную инфраструктуру.',
  entertainmentPlaces: [
    { id: 1, name: 'Казанский Кремль', type: 'Исторический комплекс', address: 'ул. Кремлёвская, 2' },
    { id: 2, name: 'Аквапарк "Ривьера"', type: 'Аквапарк', address: 'пр. Фатиха Амирхана, 1' },
    { id: 3, name: 'Парк "Черное озеро"', type: 'Городской парк', address: 'ул. Дзержинского, 2' }
  ],
  monuments: [
    { id: 1, name: 'Памятник Мусе Джалилю', year: 1966, description: 'Поэту-герою, установлен перед Кремлём.' },
    { id: 2, name: 'Памятник Казанскому Коту', year: 2009, description: 'Бронзовый кот, символ города.' },
    { id: 3, name: 'Памятник Ленину', year: 1954, description: 'На площади Свободы.' }
  ],
  historyFact: {
    short: 'Казань была основана более 1000 лет назад.',
    full: 'Точная дата основания Казани неизвестна, но официально город отметил своё тысячелетие в 2005 году. Легенда гласит, что город основал хан Алтынбек на месте, где без кипения кипел котёл воды, отсюда и название "Казань" (от татарского "казан" — котёл).'
  }
};