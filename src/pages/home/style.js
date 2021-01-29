import styled from 'styled-components';
import { AnimationUp } from '../../components/animationUp/index';

export const Pagetitle = styled.h1`
  font-size: 40px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  margin: 10px;
  animation: ${AnimationUp};
  animation-duration: 2500ms;
  animation-delay: 3000ms;
  animation-fill-mode: backwards;
`;
export const LogoTitle = styled.h1`
  font-family: 'Nanum Pen Script', cursive;
  margin: 5px;
  font-size: 78px;
  animation: ${AnimationUp};
  animation-duration: 2500ms;
  animation-delay: 2000ms;
  animation-fill-mode: backwards;
`;
export const Container = styled.div`
  width: 20vw;
  height: 38vh;
  margin-left: 10rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
export const AllContainer = styled.div`
  display: flex;
`;

export const Kidsphoto = styled.img`
  width: 60rem;
  margin-left: 10rem;
  animation: ${AnimationUp} 5s;
  animation-delay: 1100ms;
  animation-fill-mode: backwards;
`;

export const Arrowimage = styled.img`
  width: 7rem;
  background-color: #919cf9;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  animation: ${AnimationUp} 3s;
  animation-delay: 3500ms;
  animation-fill-mode: backwards;
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40rem;

  h1 {
    font-size: 28px;
    font-family: 'Nunito', sans-serif;
  }

  img {
    width: 50rem;
    margin: 5rem;
  }
`;
