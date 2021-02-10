/* eslint-disable import/named */
import React from 'react';
import { Link } from 'react-router-dom';
import Global from '../../style/global/global';
import {
  Pagetitle,
  Container,
  AllContainer,
  Kidsphoto,
  Arrowimage,
  LogoTitle,
} from './style';
import photo from '../../assets/undraw_children_4rtb.svg';
import arrowButton from '../../assets/arrow.svg';

function Home() {
  return (
    <AllContainer>
      <Container>
        <LogoTitle>SoHappy</LogoTitle>
        <Pagetitle>Ajude projetos sociais próximos a você</Pagetitle>
        <Link to="/projects">
          <Arrowimage src={arrowButton} alt="Button" />
        </Link>
        <Global />
      </Container>
      <Container>
        <Kidsphoto src={photo} alt="kids play" />
        <Global />
      </Container>
    </AllContainer>
  );
}

export default Home;
