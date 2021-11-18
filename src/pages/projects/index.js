import React from 'react';
import BaseMap from '../../components/Basemap/index'
import Global from '../../style/global/global';
import { Container } from './style';
import MapviewProvider from '../../context/MapView/index';

function Projects() {
  const MapSettings = {
    center: [-45.9, -23.4],
    zoom: 8,
    basemap: 'topo-vector',
  };

  return (
    <Container>
      <div>
        <h1>SoHappy</h1>
        <h2>Localize projetos próximos a você</h2>
      </div>
      <div className="divMap">
        <MapviewProvider>
          <BaseMap
            center={MapSettings.center}
          />
        </MapviewProvider>
        <Global />
      </div>
    </Container>
  );
}

export default Projects;
