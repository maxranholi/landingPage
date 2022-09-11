import React from "react";
import { Container, ContainerText, TitleH1, TitleH3, Paragraph, ButtonsDiv } from "./styled";
import { ContainerImages, Images, Section, Ghost1, Ghost2, Ghosts, Button1, Button2} from "./styled";
import GlobalStyle from "./globalStyled";
import logo from "./assets/logo.png"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import twitter from "./assets/twitter.png"
import youtube from "./assets/youtube.png"
import ghost1 from "./assets/fantasma1.png"
import ghost2 from "./assets/fantasma2.png"
import play from "./assets/play.png"

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ContainerImages>
        <img src={logo} />
        <Images>
          <a href="https://pt-br.facebook.com/people/A-Viagem-de-Chihiro/100067336604427/"><img src={facebook} /></a>
          <a href="https://www.instagram.com/ghiblibrasil/"><img src={instagram} /></a>
          <a href="https://twitter.com/lorenfreecss/status/1389421642435137536"><img src={twitter} /></a>
          <a href="https://www.youtube.com/watch?v=ByXuk9QqQkk&ab_channel=MadmanAnime"><img src={youtube} /></a>
        </Images>
      </ContainerImages>
      <Section>
        <ContainerText>
          <TitleH3>HAYAO MIYAZAKI</TitleH3>
          <TitleH1>A VIAGEM DE CHIHIRO</TitleH1>
          <Paragraph>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</Paragraph>
          <ButtonsDiv>
            <Button1><a href="https://www.netflix.com/search?q=a%20viagem%20de%20chihiro&jbv=60023642"><img src={play}/>ASSISTIR AGORA</a></Button1>
            <Button2><a href="https://www.youtube.com/watch?v=SgZI655GgHk&t=2s&ab_channel=FailBoom">ASSISTA AO TRAILER</a></Button2>
          </ButtonsDiv>
        </ContainerText>
        <Ghosts>
          <Ghost1 src={ghost1} />
          <Ghost2 src={ghost2} />
        </Ghosts>
      </Section>
    </Container>
  );
}

export default App;
