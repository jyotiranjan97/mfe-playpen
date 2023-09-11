import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "remoteOne/RemoteOneApp";
import { remoteOneRoutingPrefix } from "../routes/constants";

const remoteOneBasename = `/${remoteOneRoutingPrefix}`;

const RemoteOnePage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside remoteOne mfe.
  useEffect(() => {
    const remoteOneNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${remoteOneBasename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      "[remoteOne] navigated",
      remoteOneNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        "[remoteOne] navigated",
        remoteOneNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(remoteOneBasename)) {
      window.dispatchEvent(
        new CustomEvent("[shell] navigated", {
          detail: location.pathname.replace(remoteOneBasename, ""),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  // Mount remoteOne MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(remoteOneBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="remoteOne-mfe" />;
};

export default RemoteOnePage;
