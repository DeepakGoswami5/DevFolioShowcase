import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Resume from './pages/resume'
import Contact from './pages/contact'
import Projects from './pages/projects'
import NoPage from './pages/noPage'
import NavBar from './components/navBar'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
