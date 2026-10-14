
# 💜 LIYA AI — Your Personal AI Assistant

**LIYA AI** is a personal AI assistant with a modern chat interface. It is designed to communicate in Bengali and English and uses Cloudflare Workers AI to generate responses.

🌐 **Live Website:** https://ibrahimohammeds.github.io/LIYA/

---

## ✨ Features

- 💬 Interactive AI chat interface
- 🇧🇩 Bengali and English conversations
- 🤖 AI-generated responses
- 📱 Responsive design for desktop and mobile
- ⚡ Cloudflare Workers AI integration
- 🌙 Modern dark-themed interface
- ⌨️ Enter to send messages
- 📲 Progressive Web App (PWA) setup
- 🗂️ Optional offline caching for supported website files

## 🌐 Live Demo

Visit LIYA AI:

**https://ibrahimohammeds.github.io/LIYA/**

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Chat functionality |
| GitHub Pages | Website hosting |
| Cloudflare Workers | AI backend API |
| Cloudflare Workers AI | AI response generation |
| Web App Manifest | PWA configuration |
| Service Worker | Website caching and offline fallback |

## 📁 Project Structure

```text
LIYA/
├── index.html
├── README.md
├── manifest.json
├── sw.js
└── icons/
    ├── liya-192.png
    └── liya-512.png
```

The `icons/` directory contains the app icons referenced by the manifest. Add these image files for the PWA icon configuration to work correctly.

## 🚀 Getting Started

### 1. Open the Repository

Open your GitHub repository and review the project files.

### 2. Open the Website

Visit:

https://ibrahimohammeds.github.io/LIYA/

### 3. Start Chatting

Enter a question in Bengali or English and send it to LIYA AI.

## ☁️ Cloudflare Worker Backend

LIYA uses a Cloudflare Worker to receive chat messages and request AI-generated responses.

**Worker endpoint:**

https://liya-ai.thismohammed27.workers.dev/

### API Details

| Property | Value |
|---|---|
| Method | `POST` |
| Content-Type | `application/json` |
| Request field | `message` |
| Response field | `reply` |

### Example Request

```json
{
  "message": "9 + 9 কত?"
}
```

### Example Response

```json
{
  "reply": "18"
}
```

Actual AI responses may vary depending on the prompt and model.

### Cloudflare Setup

1. Sign in to the Cloudflare Dashboard.
2. Open **Workers & Pages**.
3. Select the `liya-ai` Worker.
4. Configure a Workers AI binding named `AI`.
5. Confirm that the configured AI model is available to your account.
6. Deploy the Worker.
7. Test the endpoint with a POST request.

The backend should validate incoming messages, handle errors, and allow requests from the intended website origin.

## 🌍 GitHub Pages Deployment

1. Open your GitHub repository.
2. Select **Settings → Pages**.
3. Configure the publishing source and branch.
4. Select the appropriate folder, usually `/ (root)`.
5. Save the configuration.
6. Wait for GitHub Pages to publish your changes.

After updating files, refresh the website to verify the latest version.

## 📲 Progressive Web App

LIYA includes a web app manifest and a Service Worker configuration.

- `manifest.json` defines the app name, colors, display mode, and icons.
- `sw.js` manages caching and supported offline fallback behavior.
- `index.html` registers the Service Worker.

A Service Worker does not make the AI work offline. Generating AI responses still requires an internet connection and an available backend.

## 🔐 Security

- Never commit API keys, passwords, or private credentials.
- Keep sensitive configuration on the server side.
- Validate incoming requests in the Worker.
- Restrict cross-origin requests to the intended website where appropriate.
- Review Cloudflare account permissions, usage limits, and logs.
- Avoid exposing internal error details in production responses.

## 🧪 Test the Backend

You can test the Worker from a browser developer console:

```javascript
fetch("https://liya-ai.thismohammed27.workers.dev/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "9 + 9 কত? শুধু উত্তর দাও।"
  })
})
  .then(async response => {
    console.log("HTTP status:", response.status);
    console.log("Response:", await response.json());
  })
  .catch(console.error);
```

A successful response should include a `reply` field.

## 🗺️ Future Improvements

- [ ] Conversation history
- [ ] Clear chat button
- [ ] Copy AI responses
- [ ] Voice input and output
- [ ] Improved error messages
- [ ] Optional persistent chat history
- [ ] Customizable AI personality
- [ ] Improved accessibility
- [ ] Additional PWA features

## 👨‍💻 Project

**Project name:** LIYA AI  
**Website:** https://ibrahimohammeds.github.io/LIYA/  
**Backend:** https://liya-ai.thismohammed27.workers.dev/

## 📄 License

No license has been specified for this project yet. Add a `LICENSE` file if you want to publish the project under a specific open-source license.

---

<p align="center">
  💜 <strong>LIYA AI</strong><br>
  Your Personal AI Assistant
</p>
