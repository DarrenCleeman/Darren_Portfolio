import styled from 'styled-components';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { homeContent } from '../data/home';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  z-index: 100;
`;

const IconLink = styled.a`
  color: #8892b0;
  font-size: 1.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconLink 
        href={homeContent.linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin />
      </IconLink>
      <IconLink 
        href={`mailto:${homeContent.email}`}
        aria-label="Email Contact"
      >
        <FaEnvelope />
      </IconLink>
    </FooterContainer>
  );
};

export default Footer;
