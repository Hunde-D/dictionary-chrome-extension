import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [definition, setDefinition] = useState(
    "Select a word to get the definition."
  );
  useEffect(() => {
    const updateDefinition = () => {
      chrome.storage.local.get(["definition"], (result) => {
        if (result.definition) {
          setDefinition(result.definition);
        }
      });
    };

    // Update definition when the popup is opened
    updateDefinition();

    // Listen for changes in storage (when definition is updated)
    chrome.storage.onChanged.addListener(updateDefinition);
  }, []);
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Definition</h1>
      <p>{definition}</p>
    </div>
  );
}

export default App;
