import styled from "styled-components";

export const Container = styled.div`
  color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 36px 56px 36px;
  height: 100vh;
  //max-height: 896px;
  gap: 25px;
`;

export const Image = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 11px;
  height: 354px;
`;


export const InputLabel = styled.label`
color: var(--color-inputs-label);
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  margin-top: 1.5rem;
  margin-bottom: -25px;
  width: 342px;
  padding-left: 20px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 21.09px;
  padding: 15px;
  width: 342px;
  height: 3.5rem;
  border-radius: 15px;
  background-color:var(--color-inputs);
  &::placeholder {
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    color:var(--color-background)
  }
`;

