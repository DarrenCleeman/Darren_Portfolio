import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background-color: #0a192f;
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <TopBar onMenuClick={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/" element={
            <MainContent>
              <section id="home">
                <Home />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <Skills />
              <Footer />
            </MainContent>
          } />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
