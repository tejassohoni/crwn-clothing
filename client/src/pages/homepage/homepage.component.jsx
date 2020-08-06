import React from "react";

import { HomePageContainer } from "./homepage.styles";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const HomePage = ({ history }) => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
