import '../Css/StylesComp/SectionBottons.css';

export function SectionBottons({ PreviousAnswer, ShowAnswer, NextQuestion}){
    return(
        <section className='JS--Section--Container--Bottons'>
            <article className='JS--Container'>
                <button className='JS--Button' onClick={PreviousAnswer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left-icon lucide-chevrons-left"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>
                    Previous
                </button>
            </article>
            <article className='JS--Container'>
                <button className='JS--Button' onClick={ShowAnswer}>Show Answer</button>
            </article>
            <article className='JS--Container'>
                <button className='JS--Button' onClick={NextQuestion}>
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right-icon lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </button>
            </article>
        </section>
    )
}