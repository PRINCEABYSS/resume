import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Header';
import ProjectsPage from './components/Projects';
import SkillsPage from './components/Skills';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects'

function App() {
  return (
    <Router>
      <div className="app-container">
        < BackgroundEffects /> 
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );  
}
export default App 