import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  img {
    width: 500px;
    border-radius: 0.8rem;
    border: 1px solid black;
  }
  h2 {
    font-size: 40px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    margin: 22px;
  }
  p {
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    margin: 22px;
    margin-top: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Pagetitle = styled.h1`
  font-size: 40px;
  font-family: 'Nanum Pen Script', cursive;
  font-weight: bold;
  margin-bottom: 50px;
`;
