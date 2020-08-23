import React, { useEffect, useCallback } from 'react';
import { LeafletMouseEvent, LatLngTuple } from 'leaflet';
import { Map, TileLayer, LayerGroup, Marker } from 'react-leaflet';

import { useMarker } from '../context/LayerContext';

const defaultLatLng: LatLngTuple = [-15.793657612356293, -47.88249492645264];
const zoom: number = 12;

const LeafletMap: React.FC = () => {
  const { markPlace, point, getCities } = useMarker();

  const handleClick = useCallback(
    (e: LeafletMouseEvent) => {
      markPlace(e);
    },
    [markPlace],
  );

  useEffect(() => {
    if (point) {
      getCities(point);
    }
  }, [point, getCities]);

  return (
    <>
      <Map id="mapId" center={defaultLatLng} zoom={zoom} onClick={handleClick}>
        <LayerGroup>{point && <Marker position={point}></Marker>}</LayerGroup>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </>
  );
};

export default LeafletMap;
