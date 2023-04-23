import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  Colum1,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  Colum2,
  ImgWrap,
  Img,
  
} from "./InfoElements";

const InfoSection = ({id,lightBg,topLine,heading,description,buttonLable,imgStart,img,alt,dark,primary}) => {


  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Colum1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightBg={lightBg}>{heading}</Heading>
                <SubTitle lightBg={lightBg}>{description}</SubTitle>
                <BtnWrap>
                  <Button to="home" primary={primary} dark={dark}>{buttonLable}</Button>
                </BtnWrap>
              </TextWrapper>
            </Colum1>
            <Colum2>
             <ImgWrap>
             <Img src={img} alt={alt}/>
             </ImgWrap>
            </Colum2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
