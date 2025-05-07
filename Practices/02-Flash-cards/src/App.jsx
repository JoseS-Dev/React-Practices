import { SectionHeader } from "./Components/SectionHeader";
import { SectionAnwers } from "./Components/SectionAnswers";
import './Css/App.css';

function App() {
  
  return (
    <main>
      <SectionHeader title="Flashcards" length={10}/>
      <SectionAnwers question="¿Quién es el protagonista de la saga de videojuegos Halo?"/>
    </main>
  )
}

export default App
