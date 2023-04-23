import React,{useState} from 'react';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';
import Video from '../../Videos/Video.mp4'
import { Button } from '../ButtonElements';

const HeroSection = () => {
     const [hover ,setHover] = useState(false)
     const onHover =()=>{
         setHover(!hover)
     }
    return (
        <HeroContainer> 
            <HeroBg>
                <VideoBg autoPlay loop src={Video} muted/>
            </HeroBg>
            <HeroContent>
                <HeroH1>JS is the King</HeroH1>
                    <HeroP>Learning JS and Frameworks</HeroP>

                    <HeroBtnWrapper>
                        <Button to='/' primary dark onMouseEnter={onHover} onMouseLeave={onHover}> Get Started {hover ?  <ArrowRight /> :<ArrowForward />} </Button>
                    </HeroBtnWrapper>
                
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;