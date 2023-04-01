import styled from 'styled-components';

export const Button = styled.button`
  min-width: 50px;
  height: 20px;
  margin-left: 20px;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 5px;
  color: #fff;
  background-color: red;

  box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.5);
   transition: transform 250ms linear, color 250ms linear,
    background-color 250ms linear;

  &:hover{
     color: red;
     background-color: #fff;
     border: 2px solid red;
     font-weight: 600;
     transform: scale(1.1);
  }
`;

export const ContactItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  
  &:not(:last-child){
    margin-bottom: 10px;
  }
`;
