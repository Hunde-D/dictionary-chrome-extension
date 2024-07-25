import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("No word selected.");
  const [definition, setDefinition] = useState("No definition available.");

  useEffect(() => {
    const updatePopupContent = () => {
      chrome.storage.local.get(["word", "definition"], (result) => {
        setWord(result.word || "No word selected.");
        setDefinition(result.definition || "No definition available.");
      });
    };

    // Update content when the popup is opened
    updatePopupContent();

    // Listen for changes in storage
    chrome.storage.onChanged.addListener(updatePopupContent);
  }, []);

  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>{word}</h1>
      <h3>{definition}</h3>
    </div>
  );
}
export default App;
