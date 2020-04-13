import React from "react";
// component
import Directory from "../../components/directory/directory";
// style
import { HomePageContainer } from "./homepage-styled";

function HomePage({ history }) {
  return (
    <HomePageContainer>
      <Directory history={history} />
    </HomePageContainer>
  );
}

export default HomePage;
