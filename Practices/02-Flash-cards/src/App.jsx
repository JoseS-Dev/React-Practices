import { SectionHeader } from "./Components/SectionHeader";
import { SectionAnwers } from "./Components/SectionAnswers";
import { SectionBottons } from "./Components/SectionBottons";
import './Css/App.css';

function App() {
  
  return (
    <main>
      <SectionHeader title="Flashcards" length={10}/>
      <SectionAnwers question="¿Quién es el protagonista de la saga de videojuegos Halo?"/>
      <SectionBottons
        PreviousAnswer={() => console.log("Previous Answer")}
        ShowAnswer={() => console.log("Show Answer")}
        NextQuestion={() => console.log("Next Question")}
      />
    </main>
  )
}

export default App
