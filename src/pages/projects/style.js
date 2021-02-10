import styled from 'styled-components';
import { AnimationUp } from '../../components/animationUp/index';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  div {
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: 'Nanum Pen Script', cursive;
      margin: 5rem;
      animation: ${AnimationUp};
      animation-duration: 2500ms;
      animation-delay: 1000ms;
      animation-fill-mode: backwards;
      font-size: 78px;
    }
    h2 {
      font-family: 'Nunito', cursive;
      margin: 5rem;
      animation: ${AnimationUp};
      animation-duration: 2500ms;
      animation-delay: 1200ms;
      animation-fill-mode: backwards;
      font-size: 5rem;
      outline: 3rem;
    }
  }
`;
