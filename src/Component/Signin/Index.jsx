import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLable, FormWrap,Icon, Text } from "./SigninElement";

const Signin = () => {
    
   
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Mega_Erfan</Icon>
        <FormContent>
          <Form action="#" >
            <FormH1>sign in to you account</FormH1>
            <FormLable htmlfor='for'>Email</FormLable>
            <FormInput type="email" requird/>
            <FormLable htmlfor='for'>Password</FormLable>
            <FormInput type='password'/>
            <FormButton type='submit'> Continue</FormButton>
            <Text>Forget Password</Text>
          </Form>
        </FormContent>
        
      </FormWrap>
    </Container>
  );
};

export default Signin;
