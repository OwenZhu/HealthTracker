import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";

import { IMAGE_DIR } from "constants/config";
import AustraliaOverview from "components/Dashboard/AustraliaOverview";
import DailyOverview from "components/Dashboard/DailyOverview";
import SentimentAnalysis from "components/Dashboard/SentimentAnalysis";
import OverseasTravel from "components/Dashboard/OverseasTravel";
import SurveyForm from "components/Dashboard/SurveyForm";
import WfhRate from "components/Dashboard/WfhRate";

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
    background: #3d59fa;
    box-shadow: none;
    position: sticky;
    height: 100px;
  }
`;
const ToolBar = styled(Toolbar)`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
const UpperRightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const NotificationIcon = styled(NotificationImportantIcon)`
  && {
    margin: 0 1rem;
    color: #ffffff;
  }
`;
const ProfileEntry = styled(Typography)`
  && {
    background: #ffffff;
    color: #3d59fa;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const MainContent = styled(Grid)`
  padding: 2rem 0;
  background: #f5f8ff;
`;
const Sentiment = styled(Grid)``;
const SurveyContainer = styled(Grid)`
  padding: 2rem;
  background: #ffffff;
  border-radius: 2%;
  && {
    margin-top: 36px;
  }
`;
const OverviewContainer = styled(Grid)`
  background: #ffffff;
  border-radius: 2%;
  margin-bottom: 2.5rem;
`;
const AUTitile = styled.div`
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: bold;
`;
const OrgContainer = styled(Grid)`
  height: 500px;
  background: #ffffff;
  border-radius: 2%;
`;
const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <NavBar color="transparent" id="navbar" isShadowVisible={false}>
        <ToolBar>
          <img src={`${IMAGE_DIR}logoDashBoard.svg`} alt="logo" />
          <UpperRightContainer>
            <NotificationIcon fontSize="large" />
            <ProfileEntry>T</ProfileEntry>
          </UpperRightContainer>
        </ToolBar>
      </NavBar>

      <MainContent container justify="space-around">
        <Grid item container md={11} lg={7}>
          {/* Australia Info */}
          <Grid item xs={12}>
            <AUTitile>In Australia</AUTitile>
            <OverviewContainer container justify="space-around">
              <Grid item xs={11} lg={7}>
                <AustraliaOverview />
              </Grid>
              <Grid item xs={11} lg={4}>
                <DailyOverview />
              </Grid>
            </OverviewContainer>
          </Grid>

          {/* Org Info */}
          <Grid
            item
            xs={12}
            container
            alignItems="flex-start"
            justify="space-between"
          >
            <AUTitile>In Organisation</AUTitile>
            <Sentiment item xs={12}>
              <SentimentAnalysis />
            </Sentiment>
            <OrgContainer item xs={6}>
              <OverseasTravel />
            </OrgContainer>
            <OrgContainer item xs={5}>
              <WfhRate />
            </OrgContainer>
          </Grid>
        </Grid>

        {/* Survey form */}
        <SurveyContainer item md={11} lg={4}>
          <SurveyForm />
        </SurveyContainer>
      </MainContent>
    </PageContainer>
  );
};

export default Dashboard;
