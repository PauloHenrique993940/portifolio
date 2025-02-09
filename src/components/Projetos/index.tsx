import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import React from "react";
import { Card, LinkButao } from "./styles";






const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefa</Titulo>
    <Paragrafo tipo="secundario" >
      Lista de tarefas feita com Vue.JS
    </Paragrafo>
    <LinkButao>Visualizar</LinkButao>
  </Card>
)

export default Projeto;
