document.documentElement.addEventListener("utrechtTranslate", (evt) => {
  if (typeof dataLayer != "undefined") {
    dataLayer.push({
      event: "translate",
      lang: evt.detail.lang,
      dir: evt.detail.dir,
    });
  }
});
