import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='App'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path='about' element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
