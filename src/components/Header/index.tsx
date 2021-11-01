import mainLogo from 'assets/images/mainLogo.png';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as HttpLink } from 'react-router-dom';
import {
  Button,
  ButtonsContainer,
  ButtonSeeMore,
  HeaderContainer, LogoContainer, MainLogo, Subtitle, SubtitleContainer, Title,
} from './styles';

export const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <MainLogo src={mainLogo} />
    </LogoContainer>
    <Title>APOSTAS ESPORTIVAS</Title>
    <SubtitleContainer>
      <Subtitle>Vamos te ajudar a ter resultados positivos no mundo das apostas</Subtitle>
    </SubtitleContainer>
    <ButtonsContainer>
      <HttpLink
        to={{
          pathname: 'https://site.chatpay.com.br/arenatipsbr',
        }}
        target="_blank"
      >
        <Button>Começar agora</Button>
      </HttpLink>
      <Link smooth to="#planos">
        <ButtonSeeMore>Saiba Mais</ButtonSeeMore>
      </Link>
    </ButtonsContainer>
  </HeaderContainer>
);
