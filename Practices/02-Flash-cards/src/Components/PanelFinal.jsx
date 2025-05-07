import React from "react";
import '../Css/StylesComp/PanelFinal.css';

export function PanelFinal({ contCorrect, contIncorrect, handleReset}) {
    
    return(
        <section className="JS--Section--Container--Final">
            <h2>Final results</h2>
            <article className="JS--Container--Final">
                <p>Correct Answers: {contCorrect} pts</p>
                <p>Incorrect Answers: {contIncorrect} pts</p>
                <p>Total Questions: {contCorrect + contIncorrect}</p>
                <button onClick={handleReset}>Restart FlashCards</button>
            </article>
        </section>
    )
}