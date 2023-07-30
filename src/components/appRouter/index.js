import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/home'
import About from '../../pages/about'
import Resume from '../../pages/resume'
import Contact from '../../pages/contact'
import Projects from '../../pages/projects'
import NoPage from '../../pages/noPage'
import Navbar from '../../components/navBar'

const AppRouter = () => {
    const location = useLocation();
    return (
        <>
            {(location.pathname !== "/home") && <Navbar />}
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/noPage' element={<NoPage />} />
            </Routes>
        </>
    );
}

export default AppRouter;
