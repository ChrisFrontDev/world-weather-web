import React, { createContext, useState, useCallback, useContext } from 'react';

import { LeafletMouseEvent, LatLngTuple } from 'leaflet';
import { getWeather } from '../shared/services/Api';

interface IMapContextData {
  markPlace(e: LeafletMouseEvent): void;
  getCities(latLng: LatLngTuple): void;
  cities: [] | null;
  point: LatLngTuple | null;
}

const LayerContext = createContext<IMapContextData>({} as IMapContextData);

export const LayerContextProvider = ({ children }: any) => {
  const [point, setPoint] = useState<LatLngTuple | null>(null);

  const markPlace = useCallback(
    (e: LeafletMouseEvent) => {
      // console.log(e);

      const makedPlace: LatLngTuple = [e.latlng.lat, e.latlng.lng];

      setPoint(makedPlace);
    },
    [setPoint],
  );

  const [cities, setCities] = useState<[]>([]);

  const getCities = useCallback(async (latLng: LatLngTuple) => {
    const { list } = await getWeather({ lat: latLng[0], lng: latLng[1] });

    setCities(list);
  }, []);

  return (
    <LayerContext.Provider value={{ point, markPlace, getCities, cities }}>
      {children}
    </LayerContext.Provider>
  );
};

//  and export both objects
export function useMarker(): IMapContextData {
  const context = useContext(LayerContext);

  if (!context) {
    throw new Error('useMarker() mmust be used within a LayerContextProvider');
  }
  return context;
}
