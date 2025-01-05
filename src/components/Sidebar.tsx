import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: rgba(17, 34, 64, 0.95);
  backdrop-filter: blur(10px);
  padding: 4rem 2rem 2rem;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  
  &:hover {
    color: #8892b0;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  display: block;
  width: 100%;
  text-align: left;
  color: #8892b0;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  const navItems = [
    { label: 'About', path: '#home' },
    { label: 'Projects', path: '#projects' },
    { label: 'Skills', path: '#skills' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <SidebarContainer
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
          
          {navItems.map((item) => (
            <NavLink key={item.path} onClick={() => scrollToSection(item.path.replace('#', ''))}>
              {item.label}
            </NavLink>
          ))}
        </SidebarContainer>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
