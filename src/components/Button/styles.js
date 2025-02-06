import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin-top: ${props=> props.isBlack ? '12px' : '76px' };
  background-color:${props=> props.isBlack ? 'rgba(255, 255, 255, 0.14)' : '#d93856' } ;
  color: #fff;
  font-family: Roboto;
  font-size: 17px;
  font-weight: 900;
  line-height: 2.5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
