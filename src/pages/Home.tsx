import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { homeContent } from '../data/home';
import { Course } from '../types';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  position: relative;
  background: #0a192f;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const IntroSection = styled.div`
  margin-bottom: 4rem;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  color: #ccd6f6;
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #8892b0;
  margin: 1rem 0 2rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BioSection = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 0 0 auto;
  height: 180px;
  width: 180px;
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid #64ffda;
  filter: grayscale(20%);
  transition: all 0.3s ease;
  
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.02);
  }
`;

const BioContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  color: #8892b0;
  line-height: 1.6;
  margin: 0;
`;

const EducationCard = styled(motion.div)`
  background: #112240;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
`;

const EducationTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #64ffda;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #64ffda;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const EducationDetail = styled.div`
  margin-bottom: 1rem;
  color: #8892b0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  span {
    color: #64ffda;
    font-weight: 500;
    min-width: 100px;
  }
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-left: 100px;
  max-width: 600px;
`;

const CourseItem = styled.div`
  margin: 0;
`;

const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  color: #64ffda;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }

  svg {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }
`;

const CourseDescription = styled(motion.div)`
  margin: 0.5rem 0 0.5rem 2.25rem;
  color: #8892b0;
  font-size: 0.9rem;
  line-height: 1.5;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  max-width: 550px;
`;

const CourseComponent = ({ course }: { course: Course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CourseItem>
      <CourseHeader onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
        {course.name}
      </CourseHeader>
      <AnimatePresence>
        {isExpanded && (
          <CourseDescription
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {course.description}
          </CourseDescription>
        )}
      </AnimatePresence>
    </CourseItem>
  );
};

const Home = () => {
  return (
    <HomeSection id="home">
      <Content>
        <IntroSection>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Darren Cleeman
          </Name>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Robotics Engineer & Software Developer
          </Title>
          
          <BioSection>
            <ImageContainer
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProfileImage 
                src={homeContent.profileImage} 
                alt="Darren Cleeman"
              />
            </ImageContainer>
            
            <BioContainer
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Bio>
                {homeContent.shortBio}
              </Bio>
            </BioContainer>
          </BioSection>
        </IntroSection>

        <EducationCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <EducationTitle>
            Education & Experience
            <ResumeLink 
              href={homeContent.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </ResumeLink>
          </EducationTitle>
          <EducationDetail>
            <span>University</span>
            {homeContent.education.university}
          </EducationDetail>
          <EducationDetail>
            <span>Location</span>
            {homeContent.education.location}
          </EducationDetail>
          <EducationDetail>
            <span>Degree</span>
            {homeContent.education.degree} in {homeContent.education.major}
          </EducationDetail>
          <EducationDetail>
            <span>Minor</span>
            {homeContent.education.minor}
          </EducationDetail>
          <EducationDetail>
            <span>Key Courses</span>
          </EducationDetail>
          <CourseList>
            {homeContent.education.relevantCoursework.map((course, index) => (
              <CourseComponent key={index} course={course} />
            ))}
          </CourseList>
        </EducationCard>
      </Content>
    </HomeSection>
  );
};

export default Home;
