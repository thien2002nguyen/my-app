import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function Home(props) {

    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate('/question');
    }

    return (
        <div className='home'>
            <button className='home--start' onClick={handleOnclick}>Start Quiz</button>
        </div>
    );
}

export default Home;