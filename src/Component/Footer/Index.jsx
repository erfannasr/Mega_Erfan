import React from "react";
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItem, FooterLinksTitle, FooterLinksWrapper, FooterWrapper, SocialIcons, SocialIconsLink, SocialLogo, SocialMediaContainer, SocialMediaWrap, WebsiteRights } from "./FooterElements";
import {FaFacebook , FaYoutube ,FaInstagram ,FaTwitter ,FaCopyright} from 'react-icons/fa'
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
  const ToggleHome =()=>{
    scroll.scrollToTop()
   }
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItem>
                <FooterLinksTitle>AboutUS</FooterLinksTitle>
                <FooterLink to='home'>Home</FooterLink>
                <FooterLink to='courses'>Courses</FooterLink>
                <FooterLink to='blog'>Blog</FooterLink>
                <FooterLink to='roadmap'>Road Map</FooterLink>
            </FooterLinksItem>

            <FooterLinksItem>
                <FooterLinksTitle>AboutUS</FooterLinksTitle>
                <FooterLink to='home'>Home</FooterLink>
                <FooterLink to='courses'>Courses</FooterLink>
                <FooterLink to='blog'>Blog</FooterLink>
                <FooterLink to='roadmap'>Road Map</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>


          <FooterLinksWrapper>
            <FooterLinksItem>
                <FooterLinksTitle>AboutUS</FooterLinksTitle>
                <FooterLink to='home'>Home</FooterLink>
                <FooterLink to='courses'>Courses</FooterLink>
                <FooterLink to='blog'>Blog</FooterLink>
                <FooterLink to='roadmap'>Road Map</FooterLink>
            </FooterLinksItem>

            <FooterLinksItem>
                <FooterLinksTitle>AboutUS</FooterLinksTitle>
                <FooterLink to='home'>Home</FooterLink>
                <FooterLink to='courses'>Courses</FooterLink>
                <FooterLink to='blog'>Blog</FooterLink>
                <FooterLink to='roadmap'>Road Map</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
 
        <SocialMediaContainer>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={ToggleHome}>Mega_erfan</SocialLogo>
                <WebsiteRights><FaCopyright /> </WebsiteRights>
                <SocialIcons>
                    <SocialIconsLink>
                        <FaFacebook />
                    </SocialIconsLink>

                    <SocialIconsLink>
                        <FaYoutube />
                    </SocialIconsLink>

                    <SocialIconsLink>
                        <FaInstagram />
                    </SocialIconsLink>

                    <SocialIconsLink>
                        <FaTwitter />
                    </SocialIconsLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMediaContainer>
      

      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
