
import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";


export const Descricao = styled(P)`
  margin-top:24px;
  margin-bottom: 40px;



`;


export const BotaoTrocarTema = styled.button`
  background-color: ${(props) => props.theme.corDeFundo};
  border-radius: 12px;
  color: ${(props) => props.theme.corPrincipal};
  padding: 8px;
  font: 10px;
  font-weight: bold;
  cursor: pointer;


`;


export const SidebarContainer = styled.div`
  position:sticky;
  top: 80px;
  left: 0px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;

  }



`;
