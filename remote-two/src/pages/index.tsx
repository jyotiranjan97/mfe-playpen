import React from "react";
import { Link } from "react-router-dom";

const RootPage = () => {
  return (
    <div>
      RootPage of RemoteTwo
      <Link to="/settings">Click Me</Link>
    </div>
  );
};

export default RootPage;
