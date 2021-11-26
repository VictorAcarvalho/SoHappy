import React from 'react';
import BaseMap from '../../components/Basemap/index';
import Global from '../../style/global/global';
import { DivMap } from './style';
import MapviewProvider from '../../context/MapView/index';

function Projects() {
  const MapSettings = {
    center: [-45.9, -23.4],
    zoom: 12,
    basemap: 'topo-vector',
  };

  return (
    <DivMap>
      <MapviewProvider>
        <BaseMap center={MapSettings.center} />
      </MapviewProvider>
      <Global />
    </DivMap>
  );
}

export default Projects;
