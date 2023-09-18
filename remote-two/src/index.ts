import("./bootstrap").then(({ mount }) => {
  document.body.innerHTML = '<div id="_remoteTwo"></div>';
  const devRoot = document.getElementById("_remoteTwo");

  if (devRoot)
    mount({
      mountPoint: devRoot,
      routingStrategy: "browser",
    });
});

export {};
