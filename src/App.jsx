import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState({data: []})
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/words'
      )
      setData(result.data)
      console.log(result.data)
    }
    fetchData()
  }, [data])

  return (
    <>
      <div className='App'>
        <h1>Characters</h1>
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
              <tr key={w.id}>
                <td>{w.mandarin}</td>
                <td>{w.pinyin}</td>
                <td>{w.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App