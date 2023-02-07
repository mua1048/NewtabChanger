whale.runtime.onInstalled.addListener(details => {
    if (details.reason === whale.runtime.OnInstalledReason.INSTALL) {
      whale.tabs.create({
        url: "oninstall/welcome.html"
      });
    }
  });