chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchDefinition") {
    const word = request.word;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        const definition =
          data[0]?.meanings[0]?.definitions[0]?.definition ||
          "No definition found.";
        chrome.storage.local.set({ definition });
        sendResponse({ definition });
      })
      .catch(() => {
        const definition = "No definition found.";
        chrome.storage.local.set({ definition });
        sendResponse({ definition });
      });
    return true; // Keep the messaging channel open for sendResponse
  }
});
