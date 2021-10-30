import { PlansSection } from 'components/PlansSection';
import { Questions } from 'components/Questions';
import { ResultsSection } from 'components/ResultsSection';
import { SectionTwo } from 'components/SectionTwo';
import { Header } from './components/Header';
import './reset.css';

function App() {
  return (
    <div
      className="App"
      style={{
        paddingBottom: 100,
        backgroundColor: '#f6f6f6',
      }}
    >
      <Header />
      <SectionTwo />
      <ResultsSection />
      <PlansSection />
      <Questions />
    </div>
  );
}

export default App;
