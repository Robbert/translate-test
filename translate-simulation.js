window.translate = (lang, dir) => {
  const root = document.documentElement;
  if (root) {
    // Remove previous translation rendering
    Array.from(root.classList)
      .filter((className) => /^translated\-/.test(className))
      .forEach((className) => root.classList.remove(className));

    // Render new translation settings
    root.setAttribute("lang", lang);
    root.classList.add(`translated-${dir}`);
  }
};

document.documentElement.addEventListener("utrechtTranslate", (evt) => {
  console.log(
    `Translation detected\nlanguage: ${evt.detail.lang}\ntext directionality: ${evt.detail.dir}`
  );
});
