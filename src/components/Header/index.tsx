import mainLogo from 'assets/images/mainLogo.png';
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
      <Subtitle>Vamos ter ajudar a ter resultados positivos no mundo das apostas</Subtitle>
    </SubtitleContainer>
    <ButtonsContainer>
      <Button>Começar agora</Button>
      <ButtonSeeMore>Saiba Mais</ButtonSeeMore>
    </ButtonsContainer>
  </HeaderContainer>
);
