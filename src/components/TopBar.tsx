import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #fff;
  }
`;

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <TopBarContainer>
      <MenuButton onClick={onMenuClick}>
        <FaBars />
      </MenuButton>
    </TopBarContainer>
  );
};

export default TopBar;
