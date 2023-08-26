import React from 'react';

function TextQuestion({ number, question }) {

    return (
        <div className='question__text'>
            <span className='question__text--text'>Câu {number + 1}/10:</span>
            <span className='question__text--text'> {question && question.question}</span>
        </div>
    );
}

export default TextQuestion;