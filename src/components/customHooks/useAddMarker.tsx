import React, { useCallback, useEffect } from 'react';
import { useContext } from 'react';
import { Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { LayerContext } from '../context/LayerContext';
import { getWeather } from '../../shared/services/Api';

function useAddMarker() {
  // the hook useContext is used to access to the previously defined LayerContext.
  const { setPoint, point, setCities, cities } = useContext(LayerContext);

  // define the MouseEvent with the useCallback hook
  const markPlace = useCallback(
    (e: LeafletMouseEvent) => {
      console.log(e);
      // if you want to use any event,
      // be sure that the default is disabled.
      e.originalEvent.preventDefault();
      // create your Marker with the react leaflet component Marker
      setPoint(<Marker position={e.latlng} />);
    },
    [setPoint, point],
  );

  useEffect(() => {
    const fetchData = async () => {
      console.log(point);
      if (point.props?.position) {
        const response = await getWeather(point.props.position);
        setCities(response);
      }
    };

    fetchData();
  }, [point, setPoint]);

  return {
    markPlace,
    point,
  };
}

export default useAddMarker;
