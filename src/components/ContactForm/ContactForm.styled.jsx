import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 1px solid rgb(222, 222, 222);
  padding: 10px;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: flex;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  width: 150px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: rgb(230, 230, 230);

  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0px 2px 3px 0px rgba(62, 118, 120, 1);
  transition: transform 100ms ease-in-out;

  :hover {
    box-shadow: 1px 3px 3px 0px rgba(150, 150, 150, 1);
    transform: translate(-1px, -1px);
  }
`;
