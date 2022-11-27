import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 20px;
  width: 50px;
  height: 20px;
  font-size: 12px;
  background-color: rgb(230, 230, 230);

  border-radius: 4px;
  cursor: pointer;

  box-shadow: 0px 2px 3px 0px rgba(62, 118, 120, 1);
  transition: transform 100ms ease-in-out;

  :hover {
    box-shadow: 1px 3px 3px 0px rgba(150, 150, 150, 1);
    transform: translate(-1px, -1px);
`;
