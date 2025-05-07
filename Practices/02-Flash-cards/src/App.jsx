import { SectionHeader } from "./Components/SectionHeader";
import { SectionAnwers } from "./Components/SectionAnswers";
import { SectionBottons } from "./Components/SectionBottons";
import { useState, useEffect } from "react";
import './Css/App.css';


function App() {
  const [cont, setCont] = useState(1);
  const [Questions, setQuestions] = useState([]);
  
  // UseEffect para leer el JSON Questions.json
  
  // Funcion que pasa a la siguiente pregunta
  const NextQuestion = () => {
    if (cont < 10){
      setCont(cont + 1);
    }
  }
  
  // Function que muestra la respuesta correcta
  const ShowAnswer = () => {
    alert("La respuesta correcta es A. Master Chief");
  }

  // Function para volver a la pregunta anterior
  const handlePrevious = () => {
    if (cont > 1){
      setCont(cont - 1);
    }
  }
  
  return (
    <main>
      <SectionHeader title="Flashcards" length={10} cont={cont} handleCont={NextQuestion}/>
      <SectionAnwers question="¿Quién es el protagonista de la saga de videojuegos Halo?"/>
      <SectionBottons
        PreviousAnswer={handlePrevious}
        ShowAnswer={ShowAnswer}
        NextQuestion={NextQuestion}
      />
    </main>
  )
}

export default App
