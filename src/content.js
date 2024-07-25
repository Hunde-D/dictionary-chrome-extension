document.addEventListener("dblclick", () => {
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    chrome.runtime.sendMessage({
      action: "fetchDefinition",
      word: selectedText,
    });
  }
});
