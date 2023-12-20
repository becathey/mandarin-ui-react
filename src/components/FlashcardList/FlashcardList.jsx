import PropTypes from 'prop-types'
import Flashcard from "../Flashcard/Flashcard"
import './FlashcardList.css'

const FlashcardList = ({flashcards}) => {
    return (
    <div className="cards">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.wordId} />
        })}
    </div>
)}

FlashcardList.propTypes = {
    flashcards: PropTypes.array
}

export default FlashcardList