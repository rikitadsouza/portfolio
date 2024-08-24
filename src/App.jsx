import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/LandingPage';
import SkillsPage from './pages/SkillsPage';
import InternshipsPage from './pages/InternshipsPage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import PositionsPage from './pages/PositionsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <section id="home"><HomePage /></section>
        <section id="skills"><SkillsPage /></section>
        <section id="internships"><InternshipsPage /></section>
        <section id="projects"><ProjectsPage /></section>
        <section id="achievements"><AchievementsPage /></section>
        <section id="positions"><PositionsPage/></section>
        <section id="contact"><ContactPage /></section>
      </main>
    </div>
  );
}

export default App;