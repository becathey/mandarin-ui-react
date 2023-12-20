import {useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {
    const [data, setData] = useState({data: []})

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://localhost:5000/words'
        )
        setData(result.data)
      }
      fetchData()
    }, [data])

    return (
        <div className="home">
            <h1>Mandarin Characters</h1>
            <table>
                <thead>
                    <tr>
                        <th>Mandarin</th>
                        <th>Pinyin</th>
                        <th>English</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map(w => (
                        <tr key={w.WordId}>
                            <td>{w.mandarin}</td>
                            <td>{w.pinyin}</td>
                            <td>{w.english}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home