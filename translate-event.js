// Listen to changes to the `lang` attribute and to the introduction of the
// `translated-ltr` and `translated-rtl` class names that are set by Google Translate.
// Trigger a custom event `utrechtTranslate` with info about the new language and writing direction.
if (
  typeof MutationObserver !== "undefined" &&
  typeof CustomEvent !== "undefined"
) {
  const root = document.documentElement;
  const current = {
    lang: root.lang,
    dir: root.dir,
  };

  var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(({ target }) => {
      const lang = target.lang;
      const dir = target.classList.contains("translated-rtl")
        ? "rtl"
        : target.classList.contains("translated-ltr")
        ? "ltr"
        : target.dir;

      if (lang !== current.lang || dir !== current.dir) {
        current.lang = lang;
        current.dir = dir;
        const translateEvent = new CustomEvent("utrechtTranslate", {
          detail: {
            lang,
            dir,
          },
        });
        target.dispatchEvent(translateEvent);
      }
    });
  });

  mutationObserver.observe(root, {
    attributeFilter: ["class", "lang"],
    attributes: true,
    characterData: false,
  });
}
