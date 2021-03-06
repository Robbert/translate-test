/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

document.documentElement.addEventListener("utrechtTranslate", (evt) => {
  if (typeof _paq != "undefined") {
    _paq.push(["trackEvent", "translate", "translate", evt.detail.lang]);
  }
});
