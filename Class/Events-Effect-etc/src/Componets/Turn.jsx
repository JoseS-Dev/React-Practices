import React from "react";
import '../index.css';
import { Turns } from "../Constants.js";
import Square from "./Square.jsx";

export default function Turn({turn}){
    return (
        <section className="turn">
            <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
            <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
        </section>
    )
}