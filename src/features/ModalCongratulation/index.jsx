import React from 'react';
import './style.scss'
import imgCongratulation from '../assets/images/congratulation.png'

function ModalCongratulation({ setNumber, congratulation }) {
    const handleOnclick = () => {
        setNumber(0);
        congratulation(false);
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
                        <p>5/10 correct anwser in 35 sec</p>
                    </div>
                </div>
                <button className='play-again' onClick={handleOnclick}>Play Again</button>
            </div>
        </div>
    );
}

export default ModalCongratulation;