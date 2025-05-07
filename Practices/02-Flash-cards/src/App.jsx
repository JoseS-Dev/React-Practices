import { SectionHeader } from "./Components/SectionHeader";
import { SectionAnwers } from "./Components/SectionAnswers";
import { SectionBottons } from "./Components/SectionBottons";
import { PanelFinal } from "./Components/PanelFinal";
import { useState, useEffect } from "react";
import './Css/App.css';
import { getQuestions } from "./Logic/GetQuestions";



function App() {
  const [cont, setCont] = useState(1);
  const [Questions, setQuestions] = useState([]);
  const [SelectedAnswer, setSelectedAnswer] = useState(null);
  const [ContCorrect, setContCorrect] = useState(0);
  const [ContIncorrect, setContIncorrect] = useState(0);
  const[isFinal, setIsFinal] = useState(false);
  const[disabled, setDisabled] = useState(false);
  
  // UseEffect para leer el JSON Questions.json
  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestions();
      if (data) {
        const ListQuestions = data.questions
        setQuestions(ListQuestions);
      } else {
        console.error("Error fetching questions");
      }
    }
    fetchQuestions();
  },[cont]);
  
  // Function que coloca la pregunta en el contenedor
  const QuestionQuiz = Questions[cont - 1] ? Questions[cont - 1].question : "Loading...";
  // Function que coloca las respuestas en el contenedor
  const AnswersQuiz = Questions[cont - 1 ] ? Questions[cont - 1].answers : "Loading...";

  // Convierto el AnswersQuiz en un array
  const AnswersQuizArray = Array.isArray(AnswersQuiz) ? AnswersQuiz : [AnswersQuiz];

  // Function que recupera la respuesta correcta
  const CorrectAnswer = Questions[cont - 1] ? Questions[cont - 1].correct_answer : "Loading...";
 
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === CorrectAnswer) {
      alert("Correct Answer!");
      setContCorrect(ContCorrect + 1);
    } else {
      alert("Incorrect Answer!");
      setContIncorrect(ContIncorrect + 1);
    }
  }
  
  // Funcion que pasa a la siguiente pregunta
  const NextQuestion = () => {
    if(!SelectedAnswer){
      alert("Please select an answer");
      return;
    }
    if (cont < Questions.length) {
      setCont(cont + 1);
      setSelectedAnswer(null);
    }
    else{
      setIsFinal(true);
      setDisabled(true);
    }
  }
  
  // Function que muestra la respuesta correcta
  const ShowAnswer = () => {
    alert(`La respuesta correcta es: ${CorrectAnswer}`);
  }

  // Function para volver a la pregunta anterior
  const handlePrevious = () => {
    if (cont > 1){
      setCont(cont - 1);
      setSelectedAnswer(null);
    }
    else{
      setDisabled(true);
    }
  }

  // Funcion para reiniciar el juego
  const handleReset = () => {
    setCont(1);
    setContCorrect(0);
    setContIncorrect(0);
    setSelectedAnswer(null);
    setIsFinal(false);
  }
  
  return (
    <main>
      <SectionHeader title="Flashcards" length={Questions.length} cont={cont} handleCont={NextQuestion}/>
      {!isFinal ? (
        <SectionAnwers
          question={QuestionQuiz}
          answers={AnswersQuizArray}
          correctAnswer={CorrectAnswer}
          SelectedAnswer={SelectedAnswer}
          handleAnswerClick={handleAnswerClick}
        />
      ) : (
        <PanelFinal
          contCorrect={ContCorrect}
          contIncorrect={ContIncorrect}
          handleReset={handleReset}
        />
      )}
      <SectionBottons
        PreviousAnswer={handlePrevious}
        ShowAnswer={ShowAnswer}
        NextQuestion={NextQuestion}
        disabled={disabled}
      />
    </main>
  )
}

export default App
