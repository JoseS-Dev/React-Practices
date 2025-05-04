import React from "react";
import "../Css/CssComponents/ImageTest.css";

export default function ImageTest(){
    return(
        <>
            <div className="Js-ImageTest">
                <section className="Js-ImageTest-Section">
                    <article className="Js-ImagePerson">
                        <img src="../../public/Person.png"/>
                    </article>
                </section>
                <section className="Js-ImageTest-Section">
                    <article className="Js-InfoTest">
                        <h3>Be the first  to test</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quis? Facilis nostrum officiis minima adipisci veritatis illum in assumenda dignissimos fugiat inventore iusto, nesciunt temporibus a enim nam. Eius, aut.</p>
                        <button>Apply for access</button>
                    </article>
                </section>
            </div>
        </>
    )
}