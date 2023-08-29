import React, { memo } from 'react';
import imgCongratulation from '../assets/images/congratulation.png';
import './style.scss';

function ModalCongratulation({
    answerCorrect,
    timeOut,
    handleCloseModal
}) {

    const handleClickPlayAgain = () => {
        handleCloseModal();
    }

    return (
        <div className='modal'>
            <div className="modal-overlay"></div>
            <div className="modal-body">
                <div className="header-modal">
                    <div className="header-modal__icon">
                        <img className='img-cup' src={imgCongratulation} alt="" />
                    </div>
                </div>
                <div className="content-modal">
                    <div className="content-modal">
                        <h3>Congratulation!</h3>
                        <p>You are amazing!!</p>
                        <p>{answerCorrect}/10 correct anwser in {60 - timeOut} sec</p>
                    </div>
                </div>
                <button className='play-again' onClick={handleClickPlayAgain}>Play Again</button>
            </div>
        </div>
    );
}

export default memo(ModalCongratulation);