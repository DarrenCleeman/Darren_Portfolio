import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #0a192f;
  position: relative;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 3rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled.div`
  background: #112240;
  padding: 2rem;
  border-radius: 10px;
  
  h3 {
    color: #64ffda;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const SkillItem = styled(motion.div)`
  color: #8892b0;
  margin-bottom: 1rem;
  
  &:hover {
    color: #64ffda;
  }
`;

const skills: Skill[] = [
  // Coding Languages
  { name: 'C++', category: 'programming' },
  { name: 'Python', category: 'programming' },
  { name: 'C', category: 'programming' },
  { name: 'RAPID', category: 'programming' },
  { name: 'Bash Script', category: 'programming' },
  { name: 'R', category: 'programming' },
  { name: 'Julia', category: 'programming' },
  { name: 'Assembly (LEGv8 & LC2K)', category: 'programming' },
  
  // Frameworks
  { name: 'ROS2', category: 'robotics' },
  { name: 'RIX', category: 'robotics' },
  
  // Operating Systems
  { name: 'Linux', category: 'tools' },
  { name: 'Microsoft', category: 'tools' },
  { name: 'Unix', category: 'tools' },
  
  // IDEs
  { name: 'VSCode', category: 'tools' },
  { name: 'RobotStudio', category: 'tools' },
  { name: 'Visual Studio', category: 'tools' },
  { name: 'RStudio', category: 'tools' },
  
  // Libraries
  { name: 'Pybullet', category: 'robotics' },
  { name: 'Scipy', category: 'robotics' },
  { name: 'Sympy', category: 'robotics' },
  { name: 'Tkinter', category: 'robotics' },
  
  // Robotics Skills
  { name: 'Robotic Manipulation', category: 'robotics' },
  { name: 'SLAM (Simultaneous Localization and Mapping)', category: 'robotics' },
  { name: 'Sensor Integration', category: 'robotics' },
  { name: 'Robot Control Systems', category: 'robotics' },
  
  // Soft Skills
  { name: 'Project Management', category: 'soft-skills' },
  { name: 'Team Leadership', category: 'soft-skills' },
  { name: 'Technical Documentation', category: 'soft-skills' },
  { name: 'Problem Solving', category: 'soft-skills' }
];

const categoryTitles = {
  'programming': 'Programming Languages',
  'tools': 'Tools & Operating Systems',
  'robotics': 'Robotics',
  'soft-skills': 'Soft Skills'
};

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <SkillsSection id="skills">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </Title>
        
        <SkillsGrid>
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <SkillCategory key={category}>
              <h3>{categoryTitles[category as keyof typeof categoryTitles]}</h3>
              {categorySkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {skill.name}
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Content>
    </SkillsSection>
  );
};

export default Skills;
