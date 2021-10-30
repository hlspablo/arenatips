import galgos from 'assets/images/groups/galgos.png';
import futebol from 'assets/images/groups/futebol.png';
import combo from 'assets/images/groups/combo.png';
import cavalos from 'assets/images/groups/cavalos.png';
import fifa from 'assets/images/groups/fifa.png';
import basquete from 'assets/images/groups/basquete.png';
import escanteios from 'assets/images/groups/escanteios.jpg';
import gols from 'assets/images/groups/gols.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import {
  SectionContainer,
  Title,
  CardsContainer,
  Card, CardImage,
  CardTitle,
  CardSection,
  DescriptionLine,
  DescriptionLineCentered,
  PriceContainer,
  PriceText,
  PriceValue,
  PriceValueContainer,
  PriceTextSmall,
  ButtonContainer,
  Button,
} from './styles';

export const PlansSection = () => (
  <>
    <SectionContainer id="planos">
      <Title>Escolha seu plano preferido</Title>
      <CardsContainer>
        <Card>
          <CardTitle>Arena Tips Futebol</CardTitle>
          <CardImage src={futebol} />
          <CardSection>
            <DescriptionLine>
              • Análise profissional. 📊
            </DescriptionLine>
            <DescriptionLine>
              • Tips PRÉ/LIVE Diárias
            </DescriptionLine>
            <DescriptionLine>
              • Bilhetes Prontos
            </DescriptionLine>
            <DescriptionLine>
              • Suporte
            </DescriptionLine>
            <DescriptionLine>
              • E-Book personalizado completo
            </DescriptionLine>
            <DescriptionLineCentered>
              O seu resultado, é a nossa satisfação.
              <br />
              @arenatipsbr 💚
            </DescriptionLineCentered>

            <PriceContainer>
              <PriceText>Apenas</PriceText>
              <PriceValueContainer>
                <PriceValue>R$ 60,00</PriceValue>
                <PriceTextSmall>Mensal</PriceTextSmall>
              </PriceValueContainer>
            </PriceContainer>
          </CardSection>
          <ButtonContainer>
            <Link
              to={{
                pathname: 'https://chatpay.com.br/checkout/1517501872/',
              }}
              target="_blank"
            >
              <Button>Participar</Button>
            </Link>
          </ButtonContainer>
        </Card>
        <Card>
          <CardTitle>Arena Tips COMBO</CardTitle>
          <CardImage src={combo} />
          <CardSection>
            <DescriptionLine>
              • Análise profissional. 📊
            </DescriptionLine>
            <DescriptionLine>
              • Tips PRÉ/LIVE Diárias
            </DescriptionLine>
            <DescriptionLine>
              • Bilhetes Prontos
            </DescriptionLine>
            <DescriptionLine>
              • Suporte
            </DescriptionLine>
            <DescriptionLine>
              • E-Book personalizado completo
            </DescriptionLine>
            <DescriptionLineCentered>
              O seu resultado, é a nossa satisfação.
              <br />
              @arenatipsbr 💚
            </DescriptionLineCentered>
            <PriceContainer>
              <PriceText>Apenas</PriceText>
              <PriceValueContainer>
                <PriceValue>R$ 49,90</PriceValue>
                <PriceTextSmall>Mensal</PriceTextSmall>
              </PriceValueContainer>
              <PriceValueContainer>
                <PriceValue>R$ 119,70</PriceValue>
                <PriceTextSmall>Trimestre</PriceTextSmall>
              </PriceValueContainer>
            </PriceContainer>
          </CardSection>
          <ButtonContainer>
            <Link
              to={{
                pathname: 'https://chatpay.com.br/checkout/1564422996/',
              }}
              target="_blank"
            >
              <Button>Participar</Button>
            </Link>
          </ButtonContainer>
        </Card>
        <Card>
          <CardTitle>Arena Tips Galgos</CardTitle>
          <CardImage src={galgos} />
          <CardSection>
            <DescriptionLine>
              • Análise profissional. 📊
            </DescriptionLine>
            <DescriptionLine>
              • Tips PRÉ/LIVE Diárias
            </DescriptionLine>
            <DescriptionLine>
              • Bilhetes Prontos
            </DescriptionLine>
            <DescriptionLine>
              • Suporte
            </DescriptionLine>
            <DescriptionLine>
              • E-Book personalizado completo
            </DescriptionLine>
            <DescriptionLineCentered>
              O seu resultado, é a nossa satisfação.
              <br />
              @arenatipsbr 💚
            </DescriptionLineCentered>

            <PriceContainer>
              <PriceText>Apenas</PriceText>
              <PriceValueContainer>
                <PriceValue>R$ 60,00</PriceValue>
                <PriceTextSmall>Mensal</PriceTextSmall>
              </PriceValueContainer>
            </PriceContainer>
          </CardSection>
          <ButtonContainer>
            <Link
              to={{
                pathname: 'https://chatpay.com.br/checkout/1378415557/',
              }}
              target="_blank"
            >
              <Button>Participar</Button>
            </Link>
          </ButtonContainer>
        </Card>
      </CardsContainer>
      {/* SECOND ROW */}
      <CardsContainer>
        <Card>
          <CardTitle>Arena Tips FIFA</CardTitle>
          <CardImage src={fifa} />
          <CardSection>
            <DescriptionLine>
              • Análise profissional. 📊
            </DescriptionLine>
            <DescriptionLine>
              • Tips PRÉ/LIVE Diárias
            </DescriptionLine>
            <DescriptionLine>
              • Bilhetes Prontos
            </DescriptionLine>
            <DescriptionLine>
              • Suporte
            </DescriptionLine>
            <DescriptionLine>
              • E-Book personalizado completo
            </DescriptionLine>
            <DescriptionLineCentered>
              O seu resultado, é a nossa satisfação.
              <br />
              @arenatipsbr 💚
            </DescriptionLineCentered>

            <PriceContainer>
              <PriceText>Apenas</PriceText>
              <PriceValueContainer>
                <PriceValue>R$ 49,90</PriceValue>
                <PriceTextSmall>Mensal</PriceTextSmall>
              </PriceValueContainer>
            </PriceContainer>
          </CardSection>
          <ButtonContainer>
            <Link
              to={{
                pathname: 'https://chatpay.com.br/checkout/1586885505/',
              }}
              target="_blank"
            >
              <Button>Participar</Button>
            </Link>
          </ButtonContainer>
        </Card>
        <Card>
          <CardTitle>Arena Tips Cavalos</CardTitle>
          <CardImage src={cavalos} />
          <CardSection>
            <DescriptionLine>
              • Análise profissional. 📊
            </DescriptionLine>
            <DescriptionLine>
              • Tips PRÉ/LIVE Diárias
            </DescriptionLine>
            <DescriptionLine>
              • Bilhetes Prontos
            </DescriptionLine>
            <DescriptionLine>
              • Suporte
            </DescriptionLine>
            <DescriptionLine>
              • E-Book personalizado completo
            </DescriptionLine>
            <DescriptionLineCentered>
              O seu resultado, é a nossa satisfação.
              <br />
              @arenatipsbr 💚
            </DescriptionLineCentered>
            <PriceContainer>
              <PriceText>Apenas</PriceText>
              <PriceValueContainer>
                <PriceValue>R$ 60,00</PriceValue>
                <PriceTextSmall>Mensal</PriceTextSmall>
              </PriceValueContainer>
            </PriceContainer>
          </CardSection>
          <ButtonContainer>
            <Link
              to={{
                pathname: 'https://chatpay.com.br/checkout/1344724837/',
              }}
              target="_blank"
            >
              <Button>Participar</Button>
            </Link>
          </ButtonContainer>
        </Card>
        <Card>
          <CardTitle>Arena Tips Esportes US</CardTitle>
          <CardImage src={basquete} />
          <CardSection>
            <DescriptionLine>
              • Análise profissional. 📊
            </DescriptionLine>
            <DescriptionLine>
              • Tips PRÉ/LIVE Diárias
            </DescriptionLine>
            <DescriptionLine>
              • Bilhetes Prontos
            </DescriptionLine>
            <DescriptionLine>
              • Suporte
            </DescriptionLine>
            <DescriptionLine>
              • E-Book personalizado completo
            </DescriptionLine>
            <DescriptionLineCentered>
              O seu resultado, é a nossa satisfação.
              <br />
              @arenatipsbr 💚
            </DescriptionLineCentered>

            <PriceContainer>
              <PriceText>Apenas</PriceText>
              <PriceValueContainer>
                <PriceValue>R$ 60,00</PriceValue>
                <PriceTextSmall>Mensal</PriceTextSmall>
              </PriceValueContainer>
            </PriceContainer>
          </CardSection>
          <ButtonContainer>
            <Link
              to={{
                pathname: 'https://chatpay.com.br/checkout/1578314732/',
              }}
              target="_blank"
            >
              <Button>Participar</Button>
            </Link>
          </ButtonContainer>
        </Card>
      </CardsContainer>
      {/* SECTION THREE */}
      <CardsContainer>
        <Card>
          <CardTitle>Arena Tips Escanteios</CardTitle>
          <CardImage src={escanteios} />
          <CardSection>
            <DescriptionLine>
              • Análise profissional. 📊
            </DescriptionLine>
            <DescriptionLine>
              • Tips PRÉ/LIVE Diárias
            </DescriptionLine>
            <DescriptionLine>
              • Bilhetes Prontos
            </DescriptionLine>
            <DescriptionLine>
              • Suporte
            </DescriptionLine>
            <DescriptionLine>
              • E-Book personalizado completo
            </DescriptionLine>
            <DescriptionLineCentered>
              O seu resultado, é a nossa satisfação.
              <br />
              @arenatipsbr 💚
            </DescriptionLineCentered>
            <PriceContainer>
              <PriceText>Apenas</PriceText>
              <PriceValueContainer>
                <PriceValue>R$ 39,90</PriceValue>
                <PriceTextSmall>Mensal</PriceTextSmall>
              </PriceValueContainer>
            </PriceContainer>
          </CardSection>
          <ButtonContainer>
            <Link
              to={{
                pathname: 'https://chatpay.com.br/checkout/1557058725/',
              }}
              target="_blank"
            >
              <Button>Participar</Button>
            </Link>
          </ButtonContainer>
        </Card>
        <Card>
          <CardTitle>Arena Tips Gols</CardTitle>
          <CardImage src={gols} />
          <CardSection>
            <DescriptionLine>
              • Análise profissional. 📊
            </DescriptionLine>
            <DescriptionLine>
              • Tips PRÉ/LIVE Diárias
            </DescriptionLine>
            <DescriptionLine>
              • Bilhetes Prontos
            </DescriptionLine>
            <DescriptionLine>
              • Suporte
            </DescriptionLine>
            <DescriptionLine>
              • E-Book personalizado completo
            </DescriptionLine>
            <DescriptionLineCentered>
              O seu resultado, é a nossa satisfação.
              <br />
              @arenatipsbr 💚
            </DescriptionLineCentered>
            <PriceContainer>
              <PriceText>Apenas</PriceText>
              <PriceValueContainer>
                <PriceValue>R$ 39,90</PriceValue>
                <PriceTextSmall>Mensal</PriceTextSmall>
              </PriceValueContainer>
            </PriceContainer>
          </CardSection>
          <ButtonContainer>
            <Link
              to={{
                pathname: 'https://chatpay.com.br/checkout/1107205660',
              }}
              target="_blank"
            >
              <Button>Participar</Button>
            </Link>
          </ButtonContainer>
        </Card>
      </CardsContainer>
    </SectionContainer>
  </>
);
