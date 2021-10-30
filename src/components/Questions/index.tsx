import {
  Accordion, AccordionIcon, AccordionItem, AccordionPanel, Box,
} from '@chakra-ui/react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  AccordionButtonFirst,
  QuestionContent,
  SectionContainer,
  Title,
  WhiteLine,
  AccordionButtonMiddle,
  LastButtonContainer,
  Button,
} from './styles';

export const Questions = () => (
  <>
    <SectionContainer>
      <Title>Tá em dúvida, a gente ajuda</Title>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButtonFirst>
              <Box flex="1" textAlign="left">
                Qual valor inicial do investimento ?
              </Box>
              <AccordionIcon />
            </AccordionButtonFirst>
            <WhiteLine />
          </h2>
          <AccordionPanel pb={4}>
            <QuestionContent>
              Não indicamos valor exato para começar, isso é muito particular
              enquanto uns começam com 5 mil outros começam com 50,00.
              Recomendamos investir um valor que não fará falta no seu dia dia.
            </QuestionContent>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButtonMiddle>
              <Box flex="1" textAlign="left">
                O Lucro é garantido ?
              </Box>
              <AccordionIcon />
            </AccordionButtonMiddle>
            <WhiteLine />
          </h2>
          <AccordionPanel pb={4}>
            <QuestionContent>
              Temos gerado bons lucros desde o inicio do projeto, sempre fechamos no positivo mas
              jamais garantiremos lucro, em renda variável não existe garantido,
              quem te prometer isso está mentindo.
            </QuestionContent>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButtonMiddle>
              <Box flex="1" textAlign="left">
                Preciso entender de esportes ?
              </Box>
              <AccordionIcon />
            </AccordionButtonMiddle>
            <WhiteLine />
          </h2>
          <AccordionPanel pb={4}>
            <QuestionContent>
              Não! Você não precisa entender e nem acompanhar nada,
              basta conferir as dicas no grupo do Telegram,
              copiar e seguir nossa gestão.
            </QuestionContent>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButtonMiddle>
              <Box flex="1" textAlign="left">
                Posso cancelar quando desejar ?
              </Box>
              <AccordionIcon />
            </AccordionButtonMiddle>
          </h2>
          <AccordionPanel pb={4}>
            <QuestionContent>
              Sim, você pode cancelar quando quiser.
            </QuestionContent>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <LastButtonContainer>
        <Link smooth to="#planos">
          <Button>Entendi, quero fazer parte</Button>
        </Link>
      </LastButtonContainer>
    </SectionContainer>
  </>
);
