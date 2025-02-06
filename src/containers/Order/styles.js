import styled from "styled-components";

export const Container = styled.div`
  color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 896px;
  gap: 25px;

  ul{
    overflow: auto;
    height: 300px;
    scrollbar-color:rgba(255, 255, 255, 0.19) transparent;
    scrollbar-width: thin;
  }

  

`;

export const WrapperAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  //height: 354px;
`

export const Image = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  height: 354px;
`;

export const NumberOrders = styled.div`
  display: flex ;
  align-items: center;
  justify-content: center;
  background-color: var(--color-button);
  position: absolute;
  top: calc(50% - 5px);
  right: -3px;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 1px solid red;
  font-size: 28px;
  font-weight: bold;
  line-height: 32.81px;
`

export const Order = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 101px;
  width: 342px;
  border-radius: 15px;
  margin-bottom: 25px;
  padding: 10px;
  background: #47474c;

`;

export const WrapperOrders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  min-width: 190px;
  padding: 0 15px;
`;

export const TextOrder = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 21.09px;
  margin-bottom: 20px;
`;

export const TextName = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
`;

export const ButtonI = styled.button`
  background-repeat: no-repeat;
  background-size: contain;
  height: 32px;
  cursor: pointer;
  background: transparent;
  padding: 1px;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.5;
  }
`;
