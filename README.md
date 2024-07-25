# Dictionary Chrome Extension

## Description

This Chrome extension allows you to get the definition of any English word by double-clicking on it. The extension displays the definition both in an alert box and in a popup window. It uses a public dictionary API to fetch word definitions and provides a user-friendly interface for quick lookups.

## Features

- **Double-click to Define**: Simply double-click on any word on a webpage to get its definition.
- **Alert Box**: An alert box displays the word and its definition immediately.
- **Popup Window**: The extension popup shows the word and its definition when the extension icon is clicked.
- **Persistent Storage**: The definition is stored in `chrome.storage.local` so that it can be accessed by both the popup and the alert.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/dictionary-chrome-extension.git
   cd dictionary-chrome-extension
   ```
2. **Install Dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

3. **Build the Extension**:

   ```bash
   npm run build
   ```

4. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top right corner.
   - Click "Load unpacked" and select the `dist` directory where the built files are located.

## Usage

1. **Double-Click a Word**: On any webpage, double-click on a word to trigger the extension.
   - An alert box will appear with the word and its definition.
2. **Open the Popup**: Click the extension icon in the Chrome toolbar to open the popup.
   - The popup will display the word and its definition.

## Development

To make changes or contribute to the extension, follow these steps:

1. **Make Changes**:

   - Modify the source files in the `src` directory as needed.

2. **Rebuild the Extension**:

   ```bash
   npm run build
   ```

3. **Test the Extension**:
   - Reload the extension in `chrome://extensions/` to apply changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues, feature requests, or pull requests. For detailed guidelines, please refer to the [Contributing Guidelines](CONTRIBUTING.md).

## Contact

For questions or feedback, please contact:

- **Your Name**: [hunde.ddh@gmail.com](mailto:hunde.ddh@gmail.com)
- **GitHub Profile**: [https://github.com/Hunde-D](https://github.com/Hunde-D)

```

Make sure to replace placeholder URLs and contact information with your actual details. This `README.md` provides a clear overview of the extension, installation instructions, usage details, and development guidelines.
```

```

```
