chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchDefinition") {
    const word = request.word;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) =>
        sendResponse({
          definition: data[0]?.meanings[0]?.definitions[0]?.definition,
        })
      )
      .catch(() => sendResponse({ definition: "No definition found." }));
    return true;
  }
});
