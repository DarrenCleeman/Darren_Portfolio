import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #ccd6f6;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
