import React from "react";
import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles";

const  Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic iusto possimus deleniti quae qui excepturi ipsa sunt consequuntur beatae.
      Veritatis perspiciatis a iure maxime beatae ullam sapiente at soluta veniam.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=PauloHenrique993940&bg_color=07070d&title_color=52b540&text_color=fff&icon_color=FFA500&border_color=CCCCCC" alt="Anurag's GitHub stats" />
      <img src="https://github-readme-stats.vercel.app/api?username=PauloHenrique993940&bg_color=282828&title_color=52b540&text_color=fff&icon_color=FFA500&border_color=ffffff" alt="Anurag's GitHub stats" />

    </GithubSecao>
  </section>
)

export default Sobre;
