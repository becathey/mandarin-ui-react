import { useState, useEffect } from "react";
import axios from "axios";
import FlashcardList from "../FlashcardList/FlashcardList";

const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost:5000/words'
          )
          setCards(result.data.data)
        }
        fetchData()
      }, [])

    return (
        <FlashcardList flashcards={cards} />
    )
}

export default Cards