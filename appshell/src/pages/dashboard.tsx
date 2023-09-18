import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      DashboardPage
      <br />
      <Link to="/remoteOne">Remote One</Link>
      <br />
      <Link to="/remoteTwo">Remote Two</Link>
    </div>
  );
};

export default DashboardPage;
