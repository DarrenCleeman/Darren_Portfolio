import { HomeContent } from '../types';

export const homeContent: HomeContent = {
  welcomeBackground: '/images/home/robotics-bg.jpg',
  profileImage: '/images/home/Darren Cleeman Badge Photo.jpg',
  resumeLink: '/Documents/DarrenCleeman_Resume.pdf',
  welcomeMessage: 'Darren Cleeman\nRobotics Engineer & Software Developer',
  shortBio: `I am a Bachelor of Science in Engineering student at the University of Michigan, 
  majoring in Robotics with a minor in Computer Science. My focus is on robotic software and autonomy, combining a strong theoretical foundation with hands-on experience. 
  I’ve developed skills in software engineering, control systems, and experimental research through roles such as designing 
  simulation tools at General Atomics and advancing UAV research at the HaptiX Lab. Passionate about creating innovative solutions, 
  I am seeking opportunities to apply my expertise in robotics software, autonomous systems, and the integration of AI and machine learning, 
  including their application in robotics.`,
  education: {
    university: 'University of Michigan',
    location: 'Ann Arbor, MI',
    degree: 'Bachelor of Science in Engineering',
    major: 'Robotics',
    minor: 'Computer Science',
    relevantCoursework: [
      {
        name: 'Introduction to Robotic Manipulation',
        description: 'Introduction to Robotic Manipulation at the University of Michigan explores the principles of robotic manipulation, focusing on contact mechanics, perception, planning, and control strategies. The course emphasizes practical applications in unstructured environments, such as kitchens and offices, where uncertainty and decision-making are crucial. Students engage in simulations and hardware projects to develop autonomous systems capable of purposeful physical interactions.'
      },
      {
        name: 'Robotic SLAM',
        description: 'Robotic SLAM at the University of Michigan focuses on developing autonomous navigation capabilities for mobile robots. Key topics include dead reckoning from odometry, sensor modeling of LIDAR and cameras, visual odometry, path planning, and simultaneous localization and mapping (SLAM).'
      },
      {
        name: 'Data Structures & Algorithms',
        description: 'Data Structures and Algorithms at the University of Michigan introduces algorithm analysis and fundamental data structures, including lists, stacks, queues, priority queues, hash tables, binary trees, search trees, balanced trees, and graphs. The course covers searching and sorting algorithms, recursive algorithms, basic graph algorithms, and introduces greedy algorithms and divide-and-conquer strategies and more.'
      }
    ]
  }
};

export default homeContent;
