import React, { useCallback } from 'react';
import { LeafletMouseEvent, LatLngTuple } from 'leaflet';
import { Map, TileLayer, LayerGroup, Marker } from 'react-leaflet';

import { useMarker } from '../../context/LayerContext';

const defaultLatLng: LatLngTuple = [-22.936292, -43.2046374];
const zoom: number = 12;

const LeafletMap: React.FC = () => {
  const { markPlace, point } = useMarker();

  const handleClick = useCallback(
    (e: LeafletMouseEvent) => {
      console.log();
      markPlace(e);
    },
    [markPlace],
  );

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
