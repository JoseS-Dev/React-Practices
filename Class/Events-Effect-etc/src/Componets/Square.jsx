import React from "react";
import '../index.css';

export default function Square({children, isSelected ,updateBoard, index}){
    const className = `square ${isSelected ? 'is-selected' : ''} ` 
    return (
        <div className={className} onClick={() => updateBoard(index)}>
            <span>{children}</span>
        </div>
    )
}