import React, { useState, useEffect } from 'react';

import { useMarker } from '../../context/LayerContext';

import {
  Container,
  City,
  MinimizedContainer,
  CloseMinimizeButton,
} from './Styles';

const ListCities = () => {
  const { cities } = useMarker();
  const [showList, setshowList] = useState(true);

  useEffect(() => {
    if (!showList) {
      setshowList(true);
    }
    // eslint-disable-next-line
  }, [cities]);

  const handleClickCity = (cityId: any) => {
    var w = 620;
    var h = 360;
    var left = window.screen.width / 2 - (w / 2 + 10);
    var top = window.screen.height / 2 - (h / 2 + 50);

    window.open(
      `${document.URL}city/${cityId}`,
      '_blank',
      `location=no,height=540,width=360,scrollbars=no,status=no,toolbar=no,left=${left},top=${top}`,
    );
  };

  return (
    <>
      {!!showList ? (
        <Container>
          <CloseMinimizeButton onClick={() => setshowList(false)}>
            X
          </CloseMinimizeButton>

          {cities?.map((city: any) => (
            <City key={city.id} onClick={() => handleClickCity(city.id)}>
              <h3>{city.name}:</h3>
              <p>{city.main.temp} ºC</p>
            </City>
          ))}
        </Container>
      ) : (
        <MinimizedContainer>
          <CloseMinimizeButton onClick={() => setshowList(true)}>
            {'<<'}
          </CloseMinimizeButton>
        </MinimizedContainer>
      )}
    </>
  );
};

export default ListCities;
