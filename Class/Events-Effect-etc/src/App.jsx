import Square from "./Componets/Square";
import './index.css';
import { useState } from "react";
import { Turns } from "./Constants";
import { WinnerTable } from "./Logic/Board";
import WinnerPanel from "./Componets/WinnerPanel";
import Turn from "./Componets/Turn";


export default function App() {
  const[board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(Turns.X);
  const [winner, setWinner] = useState(null);
  
  const updateBoard = (index) => {
    if(board[index] && turn) return;
    const newBoard = [...board];
    // Actualizar el tablero
    newBoard[index] = turn;
    setBoard(newBoard);

    // Comprobar si el juego ha terminado
    const checkEndGame = (newBoard) => {
      return newBoard.every((square) => square !== null);
    }
  
    // Cambiar el turno
    const newTurns = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurns);

    // Revisar si hay un ganador
    const newWinner = WinnerTable(newBoard);
    if (newWinner){
      setWinner(newWinner);
      setTurn(null);
    } else if (checkEndGame(newBoard)){
      setWinner(false);
      setTurn(null);
    }
  }

  // Resetear el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turns.X);
    setWinner(null);
  }


  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={() => resetGame()}>Reiniciar el Juego</button>
      <section className="game">
        {
           board.map((_, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
           })
        }
      </section>
      <Turn turn={turn}/>
      <WinnerPanel winner={winner} resetGame={resetGame}/>
    </main>
  )
}


