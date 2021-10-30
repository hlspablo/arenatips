import res1 from 'assets/images/results/res1.jpeg';
import res2 from 'assets/images/results/res2.jpeg';
import res3 from 'assets/images/results/res3.jpeg';
import depo1 from 'assets/images/results/depo1.jpeg';
import depo2 from 'assets/images/results/depo2.jpeg';
import depo3 from 'assets/images/results/depo3.jpeg';

import {
  SectionContainer, Title, ImagesContainer, ResultImage,
} from './styles';

export const ResultsSection = () => (
  <>
    <SectionContainer>
      <Title>Quem aposta com a gente já está faturando</Title>
      <ImagesContainer>
        <ResultImage src={res1} />
        <ResultImage src={res2} />
        <ResultImage src={res3} />
        <ResultImage src={depo1} />
        <ResultImage src={depo2} />
        <ResultImage src={depo3} />
      </ImagesContainer>
    </SectionContainer>
  </>
);
