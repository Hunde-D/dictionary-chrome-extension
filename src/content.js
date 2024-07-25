// src/content.js
document.addEventListener("dblclick", () => {
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    chrome.runtime.sendMessage(
      { action: "fetchDefinition", word: selectedText },
      (response) => {
        const message = `Word: ${response.word}\nDefinition: ${
          response.definition || "No definition found."
        }`;
        alert(message);
      }
    );
  }
});
