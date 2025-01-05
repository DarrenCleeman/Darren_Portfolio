import styled from 'styled-components';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: #8892b0;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

const Copyright = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </SocialLinks>
        <Copyright>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
