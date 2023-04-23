import React, { useState , useEffect} from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobailIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
const Navbar = ({ toggle }) => {

   const [erfan ,setErfan]=useState(false)
   const changeNav = () => {
         if(window.scrollY >= 80){
          setErfan(true)
         }else{
          setErfan(false)
         }
   }
  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
    
  },[])
   
   const ToggleHome =()=>{
    scroll.scrollToTop()
   }
  return (
    <>
      <Nav scrollNav={erfan}>
        <NavBarContainer>
          <NavLogo to="/" onClick={ToggleHome}> mega-erfan</NavLogo>
          <MobailIcon onClick={toggle}>
            <FaBars />
          </MobailIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/" smooth={true} spy={true}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" spy={true}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="courses" spy={true}>Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blog" spy={true}>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="roadmap" spy={true}>Road Map</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" spy={true}>Feature</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='signin'>SignIn</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
