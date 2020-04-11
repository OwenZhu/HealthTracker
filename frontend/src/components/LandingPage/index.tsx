import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { IMAGE_DIR, AUTH_PAGE_OPTIONS, RoutePath } from "constants/config";
import history from "historyConfig";

import AppIntro from "components/LandingPage/AppIntro";
import FeaturesIntro from "components/LandingPage/FeaturesIntro";
import UseIntro from "components/LandingPage/UseIntro";

interface NavBarProps {
  id: string;
  isShadowVisible: boolean;
}

const PageContainer = styled.div`
  flex-grow: 1;
  height: 100vh;
`;
const NavBar = styled(AppBar)<NavBarProps>`
  && {
    background: #fff;
    box-shadow: none;
    position: sticky;
    box-shadow: ${(props) =>
      props.isShadowVisible ? "5px 5px 18px #888" : "none"};
  }
`;
const ToolBar = styled(Toolbar)`
  margin: 2rem 4rem;
  display: flex;
  justify-content: space-between;
`;
const NavBarButton = styled(Button)`
  && {
    margin: 0 1rem;
  }
`;
const ContainedButton = styled(Button)`
  && {
    background: #3d59fa;
    color: #fff;
    margin: 0 1rem;
  }
`;

const LandingPage: React.FC = () => {
  const [isShadowVisible, setIsShadowVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarElem = document.getElementById("navbar");
      const navbarRects = navbarElem!.getBoundingClientRect();

      const appIntroElem = document.getElementById("appIntro");
      const appIntroRects = appIntroElem!.getBoundingClientRect();

      setIsShadowVisible(appIntroRects.top < navbarRects.height);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickAuth = (option: string) => {
    history.push(RoutePath.authPage, option);
  };

  return (
    <PageContainer>
      <NavBar color="transparent" id="navbar" isShadowVisible={isShadowVisible}>
        <ToolBar>
          <img src={`${IMAGE_DIR}logo.svg`} alt="logo" />
          <div>
            <NavBarButton variant="text" href="#navbar">
              Home
            </NavBarButton>
            <NavBarButton variant="text" href="#features">
              Features
            </NavBarButton>
            <NavBarButton variant="text" href="#use">
              How it works
            </NavBarButton>

            <NavBarButton
              variant="text"
              onClick={() => handleClickAuth(AUTH_PAGE_OPTIONS.LOGIN)}
            >
              Log in
            </NavBarButton>
            <ContainedButton
              variant="contained"
              onClick={() => handleClickAuth(AUTH_PAGE_OPTIONS.SIGNUP)}
            >
              Sign up
            </ContainedButton>
          </div>
        </ToolBar>
      </NavBar>

      <AppIntro />
      <FeaturesIntro />
      <UseIntro />
    </PageContainer>
  );
};

export default LandingPage;
