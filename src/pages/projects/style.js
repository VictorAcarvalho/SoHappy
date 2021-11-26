import styled from 'styled-components';
import { AnimationUp } from '../../components/animationUp/index';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100h;
  div {
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: left;
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

export const DivMap = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;

  img {
    width: 15px;
    position: absolute;
    left: 50%;
    bottom: 60%;
  }
  img:hover {
    cursor: pointer;
  }
`;

export const SearchBar = styled.input`
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 0.8rem;
  border: none;
  right: 80%;
  margin-top: 30px;
  margin-left: 50%;
  padding: 10px;
  background-color: #fafafa;
  outline: #fafafa;
`;