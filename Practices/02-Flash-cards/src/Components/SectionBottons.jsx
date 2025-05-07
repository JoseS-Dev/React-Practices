import '../Css/StylesComp/SectionBottons.css';

export function SectionBottons({ PreviousAnswer, ShowAnswer, NextQuestion, disabled }) {
    return(
        <section className='JS--Section--Container--Bottons'>
            <article className='JS--Container'>
                <button className='JS--Button' onClick={PreviousAnswer} disabled={disabled}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-left-icon lucide-chevrons-left"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>
                    Previous
                </button>
            </article>
            <article className='JS--Container'>
                <button className='JS--Button' onClick={ShowAnswer} disabled={disabled}>Show Answer</button>
            </article>
            <article className='JS--Container'>
                <button className='JS--Button' onClick={NextQuestion} disabled={disabled}>
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right-icon lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </button>
            </article>
        </section>
    )
}