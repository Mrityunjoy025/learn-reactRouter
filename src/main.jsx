import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

function App() {
return (
  <BrowserRouter>
  <header>
    <Link className="site-logo" to="/">#VanLife</Link>
    <nav>
      <Link to="/about">About</Link>
    </nav>
  </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)
