import React, { useEffect, useState } from 'react';
import TextQuestion from './components/TextQuestion';
import AnswerQuestion from './components/AnswerQuestion';
import ModalCongratulation from '../ModalCongratulation';
import apiQuiz from '../../api/apiQuiz';
import './style.scss';
import cancelBtn from '../assets/images/mute.png'
import { useNavigate } from 'react-router-dom';

function QuestionQuiz(props) {
    const [congratulation, setCongratulation] = useState(false);
    const [listQuestion, setListQuestion] = useState();
    const [number, setNumber] = useState(0);

    const navigate = useNavigate();

    const handleOnclick = () => {
        return number < 9 ? setNumber(number + 1) : setCongratulation(true);
    }

    const handleClickCancel = () => {
        navigate('/');
    }

    useEffect(() => {
        (async () => {
            const responsive = await apiQuiz.getAll({ amount: 10 });
            setListQuestion(responsive.data.results);
        })()
    }, [])

    return (
        <div className='question'>
            <TextQuestion number={number} question={listQuestion && listQuestion[number]} />
            <AnswerQuestion number={number} answer={listQuestion && listQuestion[number]} />
            <button onClick={handleOnclick} className='question--next'>Next</button>
            {congratulation && <ModalCongratulation setNumber={setNumber} congratulation={setCongratulation} />}
            <div onClick={handleClickCancel} className='cancel'><img src={cancelBtn} alt="" /></div>
        </div>
    );
}

export default QuestionQuiz;