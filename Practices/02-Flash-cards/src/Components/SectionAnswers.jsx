import '../Css/StylesComp/SectionAnswers.css';

export function SectionAnwers({ question }){
    return(
        <section className='JS--Section--Container'>
            <article className='JS--Container'>
                <h2>Question</h2>
                <div className='JS--Container--Question'>
                    <p>{question}</p>
                </div>
            </article>
            <article className='JS--Container'>
                <h2>Answer</h2>
                <div className='JS--Container--Answers'>
                    <div className='JS--Content--Answer'>
                        <span>A. Master Chief</span>
                    </div>
                    <div className='JS--Content--Answer'>
                        <span>B. Kratos</span>
                    </div>
                    <div className='JS--Content--Answer'>
                        <span>C. Link</span>
                        </div>
                    <div className='JS--Content--Answer'>
                        <span>D. Mario</span>
                    </div>
                </div>
            </article>
        </section>
    )
}