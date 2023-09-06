import React, { useEffect, useRef } from "react";
import { mount } from "remoteOne/RemoteOneApp";

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div>
      <h1>Hello from App Shell</h1>
      <br />
      <div ref={ref}></div>
    </div>
  );
};

export default App;
