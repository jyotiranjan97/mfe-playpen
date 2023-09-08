import React from "react";
import { Link } from "react-router-dom";

const RootPage = () => {
  return (
    <div>
      RootPage of RemoteOne
      <Link to="/profile">Click Me</Link>
    </div>
  );
};

export default RootPage;
