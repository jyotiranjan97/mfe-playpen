import("./bootstrap").then(({ mount }) => {
  document.body.innerHTML = '<div id="_remoteOne"></div>';
  const devRoot = document.getElementById("_remoteOne");

  if (devRoot)
    mount({
      mountPoint: devRoot,
      routingStrategy: "browser",
    });
});

export {};
