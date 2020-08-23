import React from 'react';

const ListCities = ({ cities }) => {
  console.log(cities);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        zIndex: 999,
        right: 0,
        backgroundColor: '#fff',
        height: `100vh`,
      }}
    >
      {cities.map((city) => (
        <div>
          <h3>{city.name}:</h3>
          <span>{city.main.temp} ºC</span>
        </div>
      ))}
    </div>
  );
};

export default ListCities;
