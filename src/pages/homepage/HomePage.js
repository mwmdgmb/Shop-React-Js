import React from "react";
import Directory from "../../components/directory/directory";
import "./homepage.styles.scss";

function HomePage({history}) {
  return (
    <div className="homepage">
      <Directory history={history} />
    </div>
  );
}

export default HomePage;
