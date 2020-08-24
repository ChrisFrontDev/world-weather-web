import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <div>
        <h1>Details:{id}</h1>
        {!!city && <h1>Meu site : {city.name}</h1>}
      </div>
    </>
  );
};

export default CityDetails;
