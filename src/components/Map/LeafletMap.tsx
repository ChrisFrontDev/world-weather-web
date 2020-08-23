import React from 'react';
import { LatLngTuple, LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, LayerGroup, Marker } from 'react-leaflet';

import useAddMarker from '../customHooks/useAddMarker';

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];

const zoom: number = 12;

const LeafletMap: React.FC = () => {
  const { markPlace, point } = useAddMarker();

  const handleClick = (e: LeafletMouseEvent) => {
    markPlace(e);
  };

  return (
    <Map id="mapId" center={defaultLatLng} zoom={zoom} onClick={handleClick}>
      <LayerGroup>{point}</LayerGroup>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
    </Map>
  );
};

export default LeafletMap;
