import React, { useState } from 'react';
import { LatLngTuple } from 'leaflet';

const latlong: LatLngTuple = [0, 0];
const LayerContext: any = React.createContext({});
//  under the declaration of the LayerContext, declare the Provider Component

const LayerContextProvider = ({ children }: any) => {
  const [point, setPoint] = useState<LatLngTuple>(latlong);
  const [cities, setCities] = useState([]);

  const defaultValue = {
    point,
    setPoint,
    cities,
    setCities,
  };

  return (
    <LayerContext.Provider value={defaultValue}>
      {children}
    </LayerContext.Provider>
  );
};

//  and export both objects
export { LayerContext, LayerContextProvider };
