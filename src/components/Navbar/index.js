import React from "react";
import { Link as LinkR } from "react-scroll";
import { Bio } from "../../data/constants";
import { FaBars } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import styled from "styled-components";
// import { useTheme } from "styled-components";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
  }

  /* Remove the 'a' tag inside and apply styles directly to LinkR */
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  background-color: transparent;
  text-decoration:none
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  text-decoration: none; 


  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

// const MobileLink = styled.a`
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   :hover {
//     color: ${({ theme }) => theme.primary};
//   }

//   &.active {
//     border-bottom: 2px solid ${({ theme }) => theme.primary};
//   }
// `;

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="home" spy={true} smooth={true} duration={500}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink>Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileMenuLinks to="#about" onClick={() => setIsOpen(!isOpen)}>
            About
          </MobileMenuLinks>
          <MobileMenuLinks to="#skills" onClick={() => setIsOpen(!isOpen)}>
            Skills
          </MobileMenuLinks>
          <MobileMenuLinks to="#experience" onClick={() => setIsOpen(!isOpen)}>
            Experience
          </MobileMenuLinks>
          <MobileMenuLinks to="#projects" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </MobileMenuLinks>
          <MobileMenuLinks to="#education" onClick={() => setIsOpen(!isOpen)}>
            Education
          </MobileMenuLinks>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default NavBar;
