<<<<<<< HEAD
import React, { createContext, useState, useContext } from 'react';
=======
import { createContext, useState, useContext } from 'react';
>>>>>>> d90a8c5f85b6dbf2da54c7f3b3e4c466fd4568d3

const MapViewContext = createContext();

export default function MapViewProvider({ children }) {
  const [mapView, setMapView] = useState([]);

  return (
    <MapViewContext.Provider
      value={{
        mapView,
        setMapView,
      }}
    >
      {children}
    </MapViewContext.Provider>
  );
}

export function useMapView() {
  const { mapView, setMapView } = useContext(MapViewContext);
  return { mapView, setMapView };
}
