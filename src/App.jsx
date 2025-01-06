import "./styles/main.css"

import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import ProjectPage from './pages/ProjectPage'
import ScrollToTop from './utils/scrollToTop';
function App() {

  return (
    <>
    <Router>
      <ScrollToTop/>
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contacts' element={<Contacts />}/>
      <Route path='/project/:id' element={<ProjectPage />}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
