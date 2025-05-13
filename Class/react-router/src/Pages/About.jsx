import React from "react";

import { Nav } from "../Componets/Nav";

export function About(){
    return(
        <main>
            <Nav/>
            <h1 style={{color: '#eee', textAlign: 'center'}}>About</h1>
            <p>This is the about page.</p>
            <p>Here you can find information about us.</p>
            <p>We are a simple React Router example.</p>
        </main>
    )
}