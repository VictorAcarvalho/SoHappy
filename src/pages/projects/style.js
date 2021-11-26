import styled from 'styled-components';

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
