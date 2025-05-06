import React from "react";
import '../Calculator.css';

export function SectionResult({ expression }) {
    const formatexpression = expression ? expression : '0';
    return (
        <section className="Js--Calculator--Result">
            <article className="Js--Result--Container">
                <h1 className="Js--Result">{formatexpression}</h1>
            </article>
        </section>
    )
}