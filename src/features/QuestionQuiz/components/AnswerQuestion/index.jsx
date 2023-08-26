import { useEffect, useState } from "react";

function AnswerQuestion({ number, answer }) {

    const [list, setList] = useState();
    const [answerCorrect, setAnswerCorrect] = useState();
    const [choose, setChoose] = useState(false);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        if (answer !== undefined) {
            setList([answer.correct_answer, ...answer.incorrect_answers]);
            setAnswerCorrect(answer.correct_answer);
        }
    }, [answer]);

    const handleOnclick = (choose) => {
        setChoose(choose);
        setShowResult(true);
    }

    return (
        <>
            <div className='question__answer'>
                {list && list.map((answer, index) => (
                    <button
                        onClick={() => handleOnclick(index)}
                        className={`question__answer--nav ${choose === index ? list[choose] === answerCorrect ? 'correct' : 'choose' : ''}`}
                        key={index}
                    >{answer}</button>
                ))}
            </div>
            {showResult && <div className='answer'>Answer: {answerCorrect}</div>}
        </>

    );
}

export default AnswerQuestion;