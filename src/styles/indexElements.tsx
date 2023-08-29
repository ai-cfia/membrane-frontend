import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  padding-top: 20vh;
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin-top: 20;
`;

export const WarningMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-top: 5px;
`;
