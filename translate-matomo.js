document.documentElement.addEventListener("utrechtTranslate", (evt) => {
  if (typeof _paq != "undefined") {
    _paq.push(["trackEvent", "translate", "translate", evt.detail.lang]);
  }
});
