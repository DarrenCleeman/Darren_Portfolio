import { HomeContent } from '../types';

export const homeContent: HomeContent = {
  welcomeBackground: '/images/home/robotics-bg.jpg',
  profileImage: '/images/home/Darren Cleeman Badge Photo.jpg',
  resumeLink: '/Documents/Darren_Full_Resume.pdf',
  welcomeMessage: 'Darren Cleeman\nRobotics Engineer & Software Developer',
  shortBio: `I am a Bachelor of Science in Engineering student at the University of Michigan, majoring in Robotics with a minor in Computer Science. My academic interests focus on robotic software and autonomy, with an emphasis on building systems that can reliably sense, plan, and act in real-world environments. Through a combination of coursework, research, and hands-on projects, I have developed a strong foundation in robotics systems, control, and algorithmic decision-making. I am motivated by the challenge of translating theoretical ideas into practical robotic behavior and am seeking opportunities to continue working at the intersection of robotics, autonomy, and intelligent systems.`,
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
        name: 'Introduction to Robotic Manipulation',
        description: 'Introduction to Robotic Manipulation at the University of Michigan explores the principles of robotic manipulation, focusing on contact mechanics, perception, planning, and control strategies. The course emphasizes practical applications in unstructured environments, such as kitchens and offices, where uncertainty and decision-making are crucial. Students engage in simulations and hardware projects to develop autonomous systems capable of purposeful physical interactions.'
      },
      {
        name: 'Robotic SLAM',
        description: 'Robotic SLAM at the University of Michigan focuses on developing autonomous navigation capabilities for mobile robots. Key topics include dead reckoning from odometry, sensor modeling of LIDAR and cameras, visual odometry, path planning, and simultaneous localization and mapping (SLAM).'
      },
      {
        name: 'Robot Operating Systems',
        description: 'Robot Operating Systems at the University of Michigan introduces the software foundations that enable complex robotic systems to operate reliably and at scale. The course focuses on middleware design, interprocess communication, concurrency, and modular system architecture, with an emphasis on publish–subscribe frameworks used in modern robotics. Students develop hands-on experience building and extending a robot operating system through programming-intensive labs and projects, integrating perception, planning, and control components. The course emphasizes robust software design for real-world robotic applications, preparing students to engineer scalable, maintainable systems for autonomous robots.'
      },
      {
        name: 'Introduction to Algorithmic Robotics',
        description: 'Introduction to Algorithmic Robotics at the University of Michigan explores the foundational computational techniques that enable autonomous robot behavior. The course emphasizes key algorithms for robot planning, optimization, state estimation under uncertainty, motion planning, and processing of sensor data such as point clouds. Students gain hands-on experience applying these principles through programming assignments and simulation projects that require implementing and integrating algorithms for robot task execution. The class blends rigorous algorithmic reasoning with practical implementation to prepare students to design intelligent robotic systems capable of operating robustly in complex environments.'
      },
      {
        name: 'Hands-On Robotics',
        description: 'Hands-On Robotics at the University of Michigan is a project-based robotics course that immerses students in the full cycle of designing, building, and programming physical robot systems. Balancing lecture material on robotics fundamentals with extended team projects, the class challenges students to apply kinematics, sensing, control, and system integration in real hardware through multiple collaborative builds and demonstrations. Work is done in small interdisciplinary teams, where students coordinate mechanical fabrication, electronics, and software to achieve specified task goals under real-world constraints. The emphasis on hands-on experimentation, iteration, and evaluation reinforces core principles of robot design and control while highlighting practical engineering trade-offs. This course serves as both a foundation in robotics practice and a laboratory environment for developing the skills needed to build and deploy functioning robots.'
      }
    ]
  }
};

export default homeContent;
