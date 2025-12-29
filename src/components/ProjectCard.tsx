import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CardLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

const Card = styled(motion.div)`
  background: #112240;
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem 0;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
  background: #112240;
  padding: 0.5rem;
  transition: transform 0.2s ease;
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  color: #64ffda;
  margin: 0 0 1rem 0;
`;

const Description = styled.p`
  color: #8892b0;
  margin-bottom: 1rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: #1a1a1a;
  color: #64ffda;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #8892b0;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
}

const ProjectCard = ({ project, isDetailed = false }: ProjectCardProps) => {
  const cardContent = (
    <Card
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <ProjectImage src={project.coverImage} alt={project.title} />
      <ContentContainer>
        <Title>{project.title}</Title>
        <Description>
          {isDetailed ? project.longDescription : project.shortDescription}
        </Description>
        <TechList>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechList>
        <Links>
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt />
            </a>
          )}
          {!isDetailed && (
            <span style={{ color: '#8892b0' }}>Learn More</span>
          )}
        </Links>
      </ContentContainer>
    </Card>
  );

  if (isDetailed) {
    return cardContent;
  }

  return (
    <CardLink to={`/projects/${project.id}`}>
      {cardContent}
    </CardLink>
  );
};

export default ProjectCard;
