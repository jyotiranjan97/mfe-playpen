import React, { useEffect, useRef } from "react";
import { mount } from "remoteOne/RemoteOneApp";

const RemoteOnePage = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default RemoteOnePage;
