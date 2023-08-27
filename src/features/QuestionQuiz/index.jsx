import React, { useEffect, useRef, useState } from 'react';
import TextQuestion from './components/TextQuestion';
import AnswerQuestion from './components/AnswerQuestion';
import ModalCongratulation from '../ModalCongratulation';
import apiQuiz from '../../api/apiQuiz';
import './style.scss';
import cancelBtn from '../assets/images/mute.png';
import clock from '../assets/images/clock.png';
import { useNavigate } from 'react-router-dom';

function QuestionQuiz(props) {

    const [congratulation, setCongratulation] = useState(false);
    const [listQuestion, setListQuestion] = useState();
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState(false);
    const [checkClock, setCheckClock] = useState(false);
    const [timeAnswer, setTimeAnswer] = useState(60);
    const [timeOut, setTimeOut] = useState();
    const time = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const responsive = await apiQuiz.getAll({ amount: 10 });
            setListQuestion(responsive.data.results);
        })()
    }, [])

    useEffect(() => {
        if (checkClock) {
            time.current = setInterval(() => {
                setTimeAnswer(prev => {
                    if (prev === 1) {
                        setCongratulation(true);
                    }
                    return prev - 1;
                });
            }, 1000);
            setCheckClock(false);
        }
        if (congratulation) {
            setTimeOut(timeAnswer);
            clearInterval(time.current);
        }
    }, [checkClock, timeAnswer, congratulation])

    const handleClickNext = () => {
        setNext(false);
        return number < 9 ? setNumber(number + 1) : setCongratulation(true);
    }

    const handleNextNull = () => null;

    const handleClickCancel = () => {
        navigate('/');
    }

    return (
        <div className='question'>
            <div className='clock'>
                <div className='clock__img'>
                    <img src={clock} alt="" />
                </div>
                <div className='clock__time'>
                    <span>{timeAnswer}</span>
                </div>
            </div>
            <TextQuestion number={number} question={listQuestion && listQuestion[number]} />
            <AnswerQuestion
                number={number}
                answer={listQuestion && listQuestion[number]}
                countAnswer={setCount}
                setCheckClock={setCheckClock}
                setNext={setNext} />
            <button onClick={next ? handleClickNext : handleNextNull} className='question--next'>Next</button>
            {congratulation && <ModalCongratulation
                setNumber={setNumber}
                congratulation={setCongratulation}
                answerCorrect={count}
                setAnswerCorrect={setCount}
                setTimeAnswer={setTimeAnswer}
                timeOut={timeOut} />}
            <div onClick={handleClickCancel} className='cancel'><img src={cancelBtn} alt="" /></div>
        </div>
    );
}

export default QuestionQuiz;