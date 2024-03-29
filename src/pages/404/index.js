/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import Global from '../../style/global/global';
import { Container } from './style';
import photoNotFound from '../../assets/undraw_empty_xct9.svg';

function NotFound() {
  return (
    <Container>
      <Global />
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <img src={photoNotFound} alt="Ilustration" />
      <Link to="/">
        <button>Voltar para a página inicial</button>
      </Link>
    </Container>
  );
}

export default NotFound;
