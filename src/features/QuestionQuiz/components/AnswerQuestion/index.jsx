import { useEffect, useState } from "react";

function AnswerQuestion({ number, answer, countAnswer, setCheckClock, setNext }) {

    const [list, setList] = useState([]);
    const [answerCorrect, setAnswerCorrect] = useState();
    const [choose, setChoose] = useState();
    const [showResult, setShowResult] = useState(false);
    const [checkChoose, setCheckChoose] = useState(true);

    useEffect(() => {
        if (answer !== undefined) {
            const listRandom = shuffleQuestion([answer.correct_answer, ...answer.incorrect_answers])
            setList(listRandom);
            setAnswerCorrect(answer.correct_answer);
            setChoose();
            setCheckChoose(true);
            setShowResult(false);
        }
    }, [answer]);

    const handleOnclick = (numberAnswer) => {
        if (number === 0) {
            setCheckClock(true);
        }
        if (list[numberAnswer] === answerCorrect) {
            countAnswer(prev => prev + 1);
        }
        setChoose(numberAnswer);
        setCheckChoose(false);
        setShowResult(true);
        setNext(true);
    }

    //Xáo phần tử trong mảng
    const shuffleQuestion = (listQuestion) => {
        //Vòng lặp chạy từ vị trí của phần tử cuối cùng trong mảng
        for (let i = listQuestion.length - 1; i > 0; --i) {
            //Math.floor làm tròn dưới, Math.random trả một số ngẫu nhiên từ 0 đến i + 1
            const j = Math.floor(Math.random() * (i + 1));
            //Đổi vị trí hai phần tử nằm ở vị trí i, j trong mảng
            [listQuestion[i], listQuestion[j]] = [listQuestion[j], listQuestion[i]];
        }
        return listQuestion;
    }

    return (
        <>
            <div className='question__answer'>
                {list && list.map((answer, index) => (
                    <button
                        onClick={() => checkChoose && handleOnclick(index)}
                        className={`question__answer--nav 
                        ${choose === index ? list[choose] === answerCorrect ? 'correct' : 'choose' : ''}`}
                        key={index}
                    >{answer}</button>
                ))}
            </div >
            {showResult && <div className='answer'>Answer: {answerCorrect}</div>}
        </>

    );
}

export default AnswerQuestion;