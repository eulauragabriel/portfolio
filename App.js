import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from './src/pages/home';
import Header from './src/components/header';
import Footer from './src/components/footer';
import About from './src/pages/about';
import Projects from './src/pages/projects';
import Technology from './src/pages/technology';
import CertificatePage from './src/pages/certificate';
import ContactPage from './src/pages/contact';
import HobbiesPage from './src/pages/hobbies';

function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/certificate" element={<CertificatePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/hobbies" element={<HobbiesPage />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
