import { useEffect, useState } from "react";

function AnswerQuestion({ answer }) {

    const [list, setList] = useState();
    const [answerCorrect, setAnswerCorrect] = useState();
    const [choose, setChoose] = useState();
    const [showResult, setShowResult] = useState(false);
    const [checkChoose, setCheckChoose] = useState(true);

    useEffect(() => {
        if (answer !== undefined) {
            setList([answer.correct_answer, ...answer.incorrect_answers]);
            setAnswerCorrect(answer.correct_answer);
            setChoose();
            setCheckChoose(true);
            setShowResult(false);
        }
    }, [answer]);

    const handleOnclick = (numberAnswer) => {
        setChoose(numberAnswer);
        setCheckChoose(false);
        setShowResult(true);
    }

    return (
        <>
            <div className='question__answer'>
                {list && list.map((answer, index) => (
                    <button
                        onClick={() => checkChoose && handleOnclick(index)}
                        className={`question__answer--nav ${choose === index ? list[choose] === answerCorrect ? 'correct' : 'choose' : ''}`}
                        key={index}
                    >{answer}</button>
                ))}
            </div >
            {showResult && <div className='answer'>Answer: {answerCorrect}</div>}
        </>

    );
}

export default AnswerQuestion;