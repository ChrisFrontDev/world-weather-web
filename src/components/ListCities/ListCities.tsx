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
  }, [cities]);

  return (
    <>
      {!!showList ? (
        <Container>
          <CloseMinimizeButton onClick={() => setshowList(false)}>
            X
          </CloseMinimizeButton>
          {cities?.map((city: any) => (
            <City key={city.id}>
              <h3>{city.name}:</h3>
              <span>{city.main.temp} ºC</span>
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
