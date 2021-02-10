import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Global from '../../style/global/global';
import { Container } from './style';

function Projects() {
  return (
    <Container>
      <div>
        <h1>SoHappy</h1>
        <h2>Localize projetos próximos a você</h2>
      </div>
      <div className="divMap">
        <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Teste</Popup>
          </Marker>
        </MapContainer>
        <Global />
      </div>
    </Container>
  );
}

export default Projects;
