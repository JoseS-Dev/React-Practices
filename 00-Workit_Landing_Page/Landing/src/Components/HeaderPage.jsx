import React from "react";
import "../Css/CssComponents/HeaderPage.css"

export default function HeaderPage(){
    return(
        <div className="Js-Header">
            <section className="Js-InfoWorkit">
                <h1>Workit</h1>
                <div className="Js-InfoText">
                    <p>Apply for access</p>
                </div>
            </section>
            <section className="Js-Title">
                <article className="Js-InfoData">
                    <h2>Data <b>tailored</b> to your needs</h2>
                    <button>Learn More</button>
                </article>
            </section>
        </div>
        
    )
}