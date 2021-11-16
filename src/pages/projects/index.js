import React from 'react';
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
        <Global />
      </div>
    </Container>
  );
}

export default Projects;
