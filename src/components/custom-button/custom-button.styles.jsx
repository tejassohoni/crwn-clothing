import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    font-family: "Fira Sans";
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 300ms all ease;
  }
`;

const invertedButtonStyles = css`
  font-family: "Fira Sans";
  background-color: white;
  color: black;
  border: none;

  &:hover {
    font-family: "Fira Sans";
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  border: none;
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Fira Sans";
  font-weight: bolder;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  margin: 10px;

  ${getButtonStyles}
`;
