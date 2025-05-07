import { useState } from "react";
import "../Css/StylesComp/SectionHeader.css";

export function SectionHeader({ title, length }){
    const [cont, setCont] = useState(1);
    
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
            <h1>{title}</h1>
            <article className="JS--article--Length">
                <input type="range" min={1} max={length} value={cont} onChange={handleCont}  readOnly/>
                <span>{cont} of {length}</span>
            </article>
        </section>
    )
}