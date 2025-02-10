import React from 'react';
import Titulo from '../../components/Titulo';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import { Descricao, BotaoTrocarTema, SidebarContainer } from './styles';

type Props = {
  trocarTema: () => void;
}

const  Sidebar = (props: Props) => (
  <section>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Paulo</Titulo>
      <Paragrafo tipo='secundario' fontSize={16} >paulohenrique</Paragrafo>
      <Descricao tipo='principal' fontSize={12}>Engenheiro front-end</Descricao>
      <BotaoTrocarTema onClick={props.trocarTema}>Trocar tema</BotaoTrocarTema>
    </SidebarContainer>
  </section>

)

export default Sidebar;
