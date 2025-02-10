import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Sidebar from './containers/Sidebar';
import Sobre from './containers/Sobre';
import Projetos from './containers/Projetos';
import EstiloGlobal, { Container } from './style';
import temaLight from './themes/light';
import temaDark from './themes/dark';
import './App.css';
import React from 'react';

function App() {
  const [estadoUsandoTemaDark, setEstadoUsandoTemaDark] = useState(true);

  function trocarTema() {
    setEstadoUsandoTemaDark(!estadoUsandoTemaDark);
  }

  // Atualiza a cor do body sempre que o tema for alterado
  useEffect(() => {
    document.body.style.backgroundColor = estadoUsandoTemaDark
      ? temaDark.corDeFundo
      : temaLight.corDeFundo;
  }, [estadoUsandoTemaDark]);

  return (
    <ThemeProvider theme={estadoUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocarTema={trocarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

