import React from 'react'
import Sidebar from './containers/Sidebar'
import Sobre  from './containers/Sobre'
import Projetos from './containers/Projetos'
import EstiloGlobal, {Container} from './style'

import './App.css'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar/>
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>

    </>
  )
}

export default App
