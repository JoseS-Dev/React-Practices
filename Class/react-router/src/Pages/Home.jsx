import React from "react";
import { Nav } from "../Componets/Nav";

export function Home(){
    return(
        <main>
            <Nav/>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <p>This is a simple React Router example.</p>
            <p>Click on the links in the navigation bar to explore.</p>
        </main>
    )
}