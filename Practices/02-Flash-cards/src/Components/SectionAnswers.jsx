import '../Css/StylesComp/SectionAnswers.css';

export function SectionAnwers({ question, answers, correctAnswer, SelectedAnswer, handleAnswerClick }) {
    
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
                    {answers.map((answer, index) => {
                        const isCorrect = answer === correctAnswer;
                        const isSelected = answer === SelectedAnswer;
                        let className = 'JS--Content--Answer';

                        if(isSelected){
                            className = isCorrect ? `${className} JS--Content--Answer--Correct` : `${className} JS--Content--Answer--Incorrect`;
                        }
                        return(
                            <div key={index} className={className} onClick={() => handleAnswerClick(answer)}>
                                <span>{answer}</span>
                            </div>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}