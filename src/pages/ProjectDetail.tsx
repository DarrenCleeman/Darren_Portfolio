import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetailContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const BackButton = styled(motion.button)`
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  &:hover {
    color: #8892b0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #64ffda;
  margin-bottom: 2rem;
`;

const Description = styled.div`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  white-space: pre-line;
`;

const TechStack = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    color: #64ffda;
    margin-bottom: 1rem;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
  
  li {
    background: #112240;
    color: #64ffda;
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #8892b0;
    text-decoration: none;
    font-size: 1.1rem;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  background: #112240;
  padding: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid #64ffda;
  border-radius: 4px;
  color: #64ffda;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  const handleBack = () => {
    navigate('/');
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <ProjectDetailContainer>
        <Content>
          <BackButton onClick={handleBack}>
            <FaArrowLeft /> Back to Projects
          </BackButton>
          <Title>Project Not Found</Title>
          <Description>Sorry, the project you're looking for doesn't exist.</Description>
        </Content>
      </ProjectDetailContainer>
    );
  }

  return (
    <ProjectDetailContainer>
      <Content>
        <BackButton
          onClick={handleBack}
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft /> Back to Projects
        </BackButton>
        
        <Title>{project.title}</Title>
        
        <ButtonContainer>
          {project.demoUrl && (
            <Button href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> View Demo
            </Button>
          )}
        </ButtonContainer>
        
        <Description>{project.longDescription}</Description>
        
        <TechStack>
          <h3>Technologies Used</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </TechStack>
        
        {project.images && project.images.length > 0 && (
          <ImageGrid>
            {project.images.map((image, index) => (
              <ProjectImage key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
            ))}
          </ImageGrid>
        )}
      </Content>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
