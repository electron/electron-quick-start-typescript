// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  const { chrome, node, electron } = process.versions;

  replaceText(`chrome-version`, chrome);
  replaceText(`node-version`, node);
  replaceText(`electron-version`, electron);
});
