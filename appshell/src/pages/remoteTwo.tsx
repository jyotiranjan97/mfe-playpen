import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "remoteTwo/RemoteTwoApp";
import { remoteTwoRoutingPrefix } from "../routes/constants";

const remoteTwoBasename = `/${remoteTwoRoutingPrefix}`;

const RemoteOnePage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside remoteOne mfe.
  useEffect(() => {
    const remoteTwoNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${remoteTwoBasename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      "[remoteTwo] navigated",
      remoteTwoNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        "[remoteTwo] navigated",
        remoteTwoNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(remoteTwoBasename)) {
      window.dispatchEvent(
        new CustomEvent("[shell] navigated", {
          detail: location.pathname.replace(remoteTwoBasename, ""),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  // Mount remoteTwo MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(remoteTwoBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="remoteTwo-mfe" />;
};

export default RemoteOnePage;
