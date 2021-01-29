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
  Container2,
} from './style';
import photo from '../../assets/undraw_children_4rtb.svg';
import arrowButton from '../../assets/arrow.svg';
import PetPhoto from '../../assets/pet.svg';
import GrandMa from '../../assets/grandma.svg';

function Home() {
  return (
    <div>
      <AllContainer>
        <Container>
          <LogoTitle>SoHappy</LogoTitle>
          <Pagetitle>Ajude projetos sociais próximos a você</Pagetitle>
          <Link to="/projectsmap">
            <Arrowimage src={arrowButton} alt="Button" />
          </Link>
          <Global />
        </Container>
        <Container>
          <Kidsphoto src={photo} alt="kids play" />
          <Global />
        </Container>
      </AllContainer>
      <Container2>
        <img src={PetPhoto} alt="Ilustração" />
        <h1>Agora ficou fácil ajudar quem mais ajuda.</h1>
        <h1>Procure projetos sociais próximo a você e faça sua contribuição</h1>
        <img src={GrandMa} alt="Ilustração" />
        <h1>Com alguns cliques você tambem pode cadastrar a sua instituição</h1>
      </Container2>
    </div>
  );
}

export default Home;
