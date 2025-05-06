import React from "react";
import '../Calculator.css';

export function SectionResult({ expression }) {
    return (
        <section className="Js--Calculator--Result">
            <article className="Js--Result--Container">
                <h2 className="Js--Result">{expression}</h2>
            </article>
        </section>
    )
}