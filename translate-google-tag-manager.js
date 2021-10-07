/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

document.documentElement.addEventListener("utrechtTranslate", (evt) => {
  if (typeof dataLayer != "undefined") {
    dataLayer.push({
      event: "translate",
      lang: evt.detail.lang,
      dir: evt.detail.dir,
    });
  }
});
