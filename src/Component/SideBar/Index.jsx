import React from "react";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SideBarLink,
  SideBArMenu,
  SideBarRoute,
  SideBArWapeer,
  SideBtnWrap,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBArWapeer>
        <SideBArMenu>
          <SideBarLink onClick={toggle} to="/">
            Home
          </SideBarLink>
          <SideBarLink onClick={toggle} to="courser">
            Courser
          </SideBarLink>
          <SideBarLink onClick={toggle} to="blogs">
            Blogs
          </SideBarLink>
          <SideBarLink onClick={toggle} to="roadmap">
            Road Map
          </SideBarLink>
          <SideBarLink onClick={toggle} to="signup">
            SignUP
          </SideBarLink>
        </SideBArMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">SignIn</SideBarRoute>
        </SideBtnWrap>
      </SideBArWapeer>
    </SideBarContainer>
  );
};

export default SideBar;
