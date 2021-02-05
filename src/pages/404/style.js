import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  h1 {
    font-size: 11rem;
  }
  h2 {
    font-size: 3rem;
  }
  img {
    width: 38rem;
    margin-top: 5rem;
  }
  button {
    background-color: #919cf9;
    margin-top: 2rem;
    border-radius: 0.8rem;
    padding: 1.2rem;
    font-size: 1.8rem;
    outline: none;
    border: 0;
    font-family: 'Nunito', cursive;
  }
  button:hover {
    cursor: pointer;
  }
`;
