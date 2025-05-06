import { VALUES, NUMBERS } from "../Constants";
import '../Calculator.css';

export function ButtonCalculator({Expression, setExpression}){
    // Funcion para manejar el evento de click en los botones
    const handleClick = (value) => {
       if(value === VALUES.CLEAR){
        setExpression(Expression.slice(0,-1));
       }
       else if(value === VALUES.RESET){
        setExpression('');
       }
       else if(value === VALUES.EQUAL){
        setExpression(eval(Expression).toString());
       }
       else{
        setExpression(Expression + value);
       }
    }
    return(
        <section className="Js--Calculator--Container">
            <article className="Js--Container">
                <button onClick={() => handleClick(NUMBERS.SEVEN)}>{NUMBERS.SEVEN}</button>
                <button onClick={() => handleClick(NUMBERS.EIGHT)}>{NUMBERS.EIGHT}</button>
                <button onClick={() => handleClick(NUMBERS.NINE)}>{NUMBERS.NINE}</button>
                <button onClick={() => handleClick(VALUES.CLEAR)}>{VALUES.CLEAR}</button>
            </article>
            <article className="Js--Container">
                <button onClick={() => handleClick(NUMBERS.FOUR)}>{NUMBERS.FOUR}</button>
                <button onClick={() => handleClick(NUMBERS.FIVE)}>{NUMBERS.FIVE}</button>
                <button onClick={() => handleClick(NUMBERS.SIX)}>{NUMBERS.SIX}</button>
                <button onClick={() => handleClick(VALUES.ADD)}>{VALUES.ADD}</button>
            </article>
            <article className="Js--Container">
                <button onClick={() => handleClick(NUMBERS.ONE)}>{NUMBERS.ONE}</button>
                <button onClick={() => handleClick(NUMBERS.TWO)}>{NUMBERS.TWO}</button>
                <button onClick={() => handleClick(NUMBERS.THREE)}>{NUMBERS.THREE}</button>
                <button onClick={() => handleClick(VALUES.SUBTRACT)}>{VALUES.SUBTRACT}</button>
            </article>
            <article className="Js--Container">
                <button onClick={() => handleClick(VALUES.DOT)}>{VALUES.DOT}</button>
                <button onClick={() => handleClick(NUMBERS.ZERO)}>{NUMBERS.ZERO}</button>
                <button onClick={() => handleClick(VALUES.DIVIDE)}>{VALUES.DIVIDE}</button>
                <button onClick={() => handleClick(VALUES.MULTIPLY)}>{VALUES.MULTIPLY}</button>
            </article>
            <article className="Js--Container">
                <button className="Js-Reset" onClick={() => handleClick(VALUES.RESET)}>{VALUES.RESET}</button>
                <button className="Js-Equal" onClick={() => handleClick(VALUES.EQUAL)}>{VALUES.EQUAL}</button>
            </article>
        </section>
    )
}