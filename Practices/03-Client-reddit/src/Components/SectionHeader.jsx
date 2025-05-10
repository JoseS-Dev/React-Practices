import React from 'react';
import '../Css/StylesComponents/SectionHeader.css';



export function SectionHeader({ title, githubLink }){
    return(
        <header className='JSSectionHeader'>
            <h2>{title}</h2>
            <a href={githubLink} className='JSLink'>Start on Github</a>
        </header>
    )
}