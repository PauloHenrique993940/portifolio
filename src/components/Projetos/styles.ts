import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  padding: 16px;

`;

export const LinkButao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corPrincipal};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;


`;
