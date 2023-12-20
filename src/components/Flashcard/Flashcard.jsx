import { useState } from "react";
import {PropTypes} from 'prop-types'
import './Flashcard.css'

const Flashcard = ({flashcard}) => {
    const [flip, setFlip] = useState(false)

    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                <div>{flashcard.mandarin}</div>
                <div>{flashcard.pinyin}</div>
            </div>
            <div className="back">
                {flashcard.english}
            </div>
        </div>
    )
}

Flashcard.propTypes = {
    flashcard: PropTypes.object
}

export default Flashcard