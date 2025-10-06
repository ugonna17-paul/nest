import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './pages/Landing-page/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About-us/About'
import Blog from './pages/Blog/Blog'
import Home from './pages/Landing-page/Home'
import Career from './pages/Career/Career'
import Zoho from './pages/Zoho'
import ScrollToTop from './components/ScrollToTop'
import Monday from './pages/Monday'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {/* <AOSInit /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/category/zoho" element={<Zoho />} />
          <Route path="/category/monday" element={<Monday />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
