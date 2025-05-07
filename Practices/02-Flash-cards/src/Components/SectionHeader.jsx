import { useState } from "react";

export function SectionHeader({ title, length }){
    const {cont, setCont} = useState(1);
    
    // Funcion que aumenta el contador de las preguntas y el input range
    const handleCont = () => {
        if(cont < length){
            setCont(cont + 1);
        }
        else{
            setCont(1);
        }
    } 
    
    
    return(
        <section className="JS--Section--Header">
            <h2>{title}</h2>
            <article className="JS--article--Length">
                <input type="range" min={1} max={length} readOnly/>
                <span>{cont} of {length}</span>
            </article>
            <button className="JS--btn--Next" onClick={() => handleCont}>Next</button>
        </section>
    )
}