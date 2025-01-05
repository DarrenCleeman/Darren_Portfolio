import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Polygon Collision Simulation',
    shortDescription: 'Developed a robust simulation framework for rigid body dynamics, focusing on convex polygon collisions and advanced physics modeling.',
    longDescription: `
      Developed and implemented a robust simulation framework for rigid body dynamics, focusing on convex polygon collisions. The project explored advanced computational geometry and physics modeling to accurately simulate dynamic interactions under gravitational and external forces. Key features included collision detection using the Separating Axis Theorem (SAT), impulse-based and Linear Complementarity Problem (LCP) methods for collision response, and energy dissipation mechanisms such as drag forces and friction modeling. The framework supported customizable polygon generation and scalable simulations, showcasing realistic physical behaviors like momentum exchange, rotational dynamics, and stability.

      Key Features:
      • Collision detection using SAT for geometric precision
      • Impulse-based and LCP formulations for resolving dynamic interactions
      • Integration of rotational and linear dynamics
      • Realistic energy dissipation via drag and friction modeling
      • Customizable polygon creation for diverse simulations
    `,
    technologies: [
      'Python',
      'NumPy',
      'Matplotlib',
      'Matplotlib Animation',
      'Multithreading',
      'Computational Geometry',
      'Physics Modeling'
    ],
    coverImage: '/images/projects/project_1/2024-07-30_21-48.png',
    images: [
      '/images/projects/project_1/Screen Shot 2025-01-05 at 1.26.30 AM.png',
      '/images/projects/project_1/Screen Shot 2025-01-05 at 1.25.40 AM.png'
    ],
    learnedSkills: ['Computational Geometry', 'Physics Simulation', 'Numerical Methods', 'Algorithm Design']
  },
  {
    id: '2',
    title: 'Optimizing Drone Simulations',
    shortDescription: 'Developed and conducted experimental tests to validate UAV dynamics and refine simulation models.',
    longDescription: `
      Developed and conducted experimental tests to validate UAV dynamics and refine simulation models. This involved measuring the drone's moments of inertia using a bifilar pendulum setup and performing motor thrust tests to characterize ESC performance. These tests provided critical data for improving the accuracy of flight simulations and advancing autonomous drone functionality.

      Key Contributions:
      • Designed and executed bifilar pendulum tests to calculate UAV moments of inertia, ensuring precise modeling for roll, pitch, and yaw stability
      • Conducted motor thrust tests using ramping and stepping methodologies to evaluate thrust under varying ESC conditions
      • Troubleshot and refined the experimental setup, including calibration of load cell sensors and adjustment of pendulum configurations
      • Analyzed results to identify discrepancies between experimental and CAD-derived inertia values and proposed future improvements
    `,
    technologies: [
      'Arduino',
      'MATLAB',
      'CAD/SolidWorks'
    ],
    coverImage: '/images/projects/project_2/PNG image.png',
    images: [
      '/images/projects/project_2/Screen Shot 2025-01-05 at 2.21.15 AM.png',
      '/images/projects/project_2/Screen Shot 2025-01-05 at 2.22.12 AM.png'
    ],
    learnedSkills: ['UAV Dynamics', 'Experimental Design', 'Data Analysis', 'Hardware Integration']
  },
  {
    id: '3',
    title: 'SLAM Navigation',
    shortDescription: 'Designed and implemented a robotic navigation system for autonomous path planning and exploration in unknown environments.',
    longDescription: `
      Designed and implemented a robotic navigation system for a Robotic SLAM course, focusing on autonomous path planning, obstacle avoidance, and exploration in unknown environments. The project utilized SLAM principles to enable efficient mapping and navigation.

      Key Features:
      • Developed an obstacle distance grid to model safe distances from obstacles, improving path planning by avoiding collisions
      • Implemented the A* path planning algorithm with optimized g_cost and h_cost calculations to balance exploration efficiency and safety
      • Applied frontier-based exploration methods to identify and navigate to unexplored areas of the map, enabling full map completion
      • Conducted extensive testing and optimization to handle complex scenarios, such as narrow passages and concave obstacles
    `,
    technologies: [
      'C++',
      'Python',
      'LIDAR',
      'NoMachine'
    ],
    coverImage: '/images/projects/project_3/PNG image.png',
    images: [
      '/images/projects/project_3/Screen Shot 2025-01-05 at 3.32.01 AM.png',
      '/images/projects/project_3/Screen Shot 2025-01-05 at 3.32.15 AM.png'
    ],
    learnedSkills: ['SLAM', 'Path Planning', 'Autonomous Navigation', 'Algorithm Optimization']
  }
];

export default projects;
