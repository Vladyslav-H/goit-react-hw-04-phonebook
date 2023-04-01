import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 300px;
  padding: 20px;
  background-color: #8cd14e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`;

export const Button = styled.button`
  min-width: 150px;
  border: none;
  cursor: pointer;
  height: 30px;
  padding: 0;
  border-radius: 5px;
  color: #008630;
  background-color: #ffc459;
  font-size: 18px;
  box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.75);
  transition: transform 250ms linear, color 250ms linear,
    background-color 250ms linear;

  &:hover
 {
    color: #ffc459;
    background-color: #008630;
    transform: scale(1.1);
  }
`;

export const Label = styled.label`
  color: #008be5;
  font-size: 22px;
  font-weight: 600;
`;

export const Input = styled.input`
  margin-left: 30px;
`;
