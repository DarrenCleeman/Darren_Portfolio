import { HomeContent } from '../types';

export const homeContent: HomeContent = {
  welcomeBackground: '/images/home/robotics-bg.jpg',
  profileImage: '/images/home/Darren Cleeman Badge Photo.jpg',
  resumeLink: '/Documents/DarrenCleeman_Resume.pdf',
  welcomeMessage: 'Darren Cleeman\nRobotics Engineer & Software Developer',
  shortBio: `I am a Bachelor of Science in Engineering student at the University of Michigan, 
  majoring in Robotics with a minor in Computer Science. My focus is on robotic software and autonomy, combining a strong theoretical foundation with hands-on experience. 
  I've developed skills in software engineering, control systems, and experimental research through roles such as designing 
  simulation tools at General Atomics and advancing UAV research at the HaptiX Lab. Passionate about creating innovative solutions, 
  I am seeking opportunities to apply my expertise in robotics software, autonomous systems, and the integration of AI and machine learning.`,
  linkedinUrl: 'https://www.linkedin.com/in/darren-cleeman-27318219b/',
  email: 'dcleeman@umich.edu',
  education: {
    university: 'University of Michigan',
    location: 'Ann Arbor, MI',
    degree: 'Bachelor of Science in Engineering',
    major: 'Robotics Engineering',
    minor: 'Computer Science',
    relevantCoursework: [
      {
        name: 'ROB 550: Robotic Systems Laboratory',
        description: 'Hands-on experience with robotic systems, including mobile robots, manipulation, and sensing.'
      },
      {
        name: 'EECS 467: Autonomous Robotics',
        description: 'Algorithms and techniques for robot perception, localization, mapping, and planning.'
      },
      {
        name: 'ROB 511: Robot Operating Systems',
        description: 'Programming with ROS, including navigation, manipulation, and perception.'
      }
    ]
  }
};

export default homeContent;
