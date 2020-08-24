import React, { useCallback } from 'react';

import LeafletMap from '../../components/Map/LeafletMap';
import ListCities from '../../components/ListCities/ListCities';

import { useMarker } from '../../context/LayerContext';

import { Container, SearchButton } from './styles';

const Home = () => {
  const { getCities, point, cities } = useMarker();

  const handleButtonClick = useCallback(() => {
    if (point) {
      getCities(point);
    }
  }, [getCities, point]);

  return (
    <Container>
      <SearchButton onClick={handleButtonClick} disabled={!point}>
        {!point ? 'click on a place on the map' : 'Search Cities nearby'}
      </SearchButton>

      <LeafletMap />

      {!!cities?.length && <ListCities />}
    </Container>
  );
};

export default Home;
