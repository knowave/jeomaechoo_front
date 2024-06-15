import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #282c34;
    color: white;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  position: relative;
`;

export const MenuCard = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
  transition: transform 0.1s ease-in-out;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  span {
    display: block;
    font-size: 1.5rem;
    margin-top: 10px;
  }
`;

export const SpinButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Winner = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  color: black;
  padding: 20px;
  box-shadow: 24px;
  border-radius: 8px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin: 10px 0;
    padding: 10px;
    width: 80%;
  }

  button {
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const StyledModalContent = styled(ModalContent)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (min-width: 601px) {
    width: 400px;
  }

  h2 {
    margin: 0;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
`;

export const CustomGreenButton = styled.label`
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  display: block; // inline-block 에서 block 으로 변경
  font-weight: bold;
  text-align: left;
`;

export const WhiteButton = styled(Button)`
  background-color: white;
  color: black;
`;

export const BlackButton = styled(Button)`
  background-color: black;
  color: white;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ImagePreview = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;
