import React from 'react';
import { LatLngTuple, LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, LayerGroup, Marker } from 'react-leaflet';

import useAddMarker from '../customHooks/useAddMarker';
import ListCities from '../ListCities';

const defaultLatLng: LatLngTuple = [-15.793657612356293, -47.88249492645264];

const zoom: number = 12;

const LeafletMap: React.FC = () => {
  const { markPlace, point, cities } = useAddMarker();

  const handleClick = (e: LeafletMouseEvent) => {
    markPlace(e);
  };

  return (
    <>
      <Map id="mapId" center={defaultLatLng} zoom={zoom} onClick={handleClick}>
        <LayerGroup>{point}</LayerGroup>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>

      {cities.list && <ListCities cities={cities.list} />}
    </>
  );
};

export default LeafletMap;
