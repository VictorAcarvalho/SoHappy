import React from 'react';
import { Link } from 'react-router-dom';
import BaseMap from '../../components/Basemap/index';
import Global from '../../style/global/global';
import { DivMap } from './style';
import MapviewProvider from '../../context/MapView/index';
import PinMap from '../../assets/gps.svg';

function Projects() {
  const MapSettings = {
    center: [-42.4980193, -22.9321933],
    zoom: 20,
    basemap: 'streets',
  };

  return (
    <DivMap>
      <MapviewProvider>
        <BaseMap center={MapSettings.center} />
      </MapviewProvider>
      <Link to="/projects">
        <img src={PinMap} className="pinMap" alt="Localization" />
      </Link>
      <Global />
    </DivMap>
  );
}

export default Projects;
