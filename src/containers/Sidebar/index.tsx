import React from 'react';
import Titulo from '../../components/Titulo';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import { Descricao, BotaoTrocarTema, SidebarContainer } from './styles';


const  Sidebar = () => (
  <section>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Paulo</Titulo>
      <Paragrafo tipo='secundario' fontSize={16} >paulohenrique</Paragrafo>
      <Descricao tipo='principal' fontSize={12}>Engenheiro front-end</Descricao>
      <BotaoTrocarTema>Trocar tema</BotaoTrocarTema>
    </SidebarContainer>
  </section>

)

export default Sidebar;
