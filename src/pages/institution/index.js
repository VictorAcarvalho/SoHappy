import React from 'react';
import Global from '../../style/global/global';
import Institutional1 from '../../assets/shutterstock_529489480-1-1-1.jpg';
import Institutional2 from '../../assets/escola-futebol-brasileiros-orlando.jpg';
import * as S from './style';

function Institution() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Pagetitle>SoHappy</S.Pagetitle>
        <img src={Institutional1} alt="Institution" />
        <h2>Escola de futebol do Seu Juca</h2>
        <p>
          A escola de Futebol do Seu Juca, vem com o intuito de ajudar criança
          carentes locais.
        </p>
        <img src={Institutional2} alt="Institution2" />
        <p>Endereço: Rua dos Ajudantes, 720, Barra-Nova</p>
        <Global />
      </S.Wrapper>
    </S.Container>
  );
}

export default Institution;
