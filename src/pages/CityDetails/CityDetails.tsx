import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './Styles';

const CityDetails = () => {
  const { id } = useParams();
  const [city, setCity] = useState<any | undefined>();

  useEffect(() => {
    const storagedCities: any = localStorage.getItem('@WorldWeatherApp:cities');

    if (storagedCities) {
      const cities: any = [...JSON.parse(storagedCities)];

      const findedCity = cities?.find((city: any) => city.id === parseInt(id));

      console.log(findedCity);

      setCity({ ...findedCity });
    }
  }, [id]);

  return (
    <>
      {!!city ? (
        <Container>
          <h1>{city.name}</h1>
          <img
            id="wicon"
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="Weather icon"
          ></img>
          <h2>{city.weather[0].description}</h2>
          <div>
            <span>
              Min: <strong>{city.main.temp_min} ºC</strong>
            </span>
            <span>
              Max: <strong>{city.main.temp_max} ºC</strong>
            </span>
          </div>
        </Container>
      ) : (
        <h1>error, close and try again</h1>
      )}
    </>
  );
};

export default CityDetails;
