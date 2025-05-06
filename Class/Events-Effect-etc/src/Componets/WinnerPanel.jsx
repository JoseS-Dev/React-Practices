import React from "react";
import '../index.css';
import Square from "./Square.jsx";

export default function WinnerPanel({winner, resetGame}){
    if (winner == null) return null;
    const textWinner = winner ? 'Ganador' : "Hubo un Empate";
    return (
        <section className="winner">
            <div className="test">
                <h2>{textWinner}</h2>
            </div>
            <div className="win">
                <Square>{winner}</Square>
            </div>
            <button onClick={() => {
                resetGame();
            }}>
                Reiniciar el juego
            </button>
        </section>
        
    )
}