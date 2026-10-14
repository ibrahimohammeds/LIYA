
# 💜 LIYA AI — Your Personal AI Assistant

LIYA AI is a personal AI assistant designed to communicate naturally in Bengali and English. It provides a simple chat interface connected to an AI backend powered by Cloudflare Workers AI.

## 🌐 Live Website

**Try LIYA AI:**  
https://ibrahimohammeds.github.io/LIYA/

## ✨ Features

- 💬 Interactive AI chat interface
- 🇧🇩 Bengali and English conversations
- 🤖 AI-powered responses
- 📱 Responsive design for mobile and desktop
- ⚡ Real-time communication with the AI backend
- 🔒 HTTPS communication
- ⌨️ Enter to send messages
- 🌙 Modern dark-themed interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub Pages
- Cloudflare Workers
- Cloudflare Workers AI

## 📁 Project Structure

```text
LIYA/
├── index.html
└── README.md
```

The Cloudflare Worker backend is maintained separately in Cloudflare.

## 🚀 Getting Started

### 1. Open the Website

Visit:

https://ibrahimohammeds.github.io/LIYA/

### 2. Send a Message

Type a question in Bengali or English and press Enter or click the send button.

### 3. AI Backend

LIYA communicates with its Cloudflare Worker backend at:

https://liya-ai.thismohammed27.workers.dev/

## ⚙️ Deployment

### GitHub Pages

1. Open the LIYA repository on GitHub.
2. Go to **Settings → Pages**.
3. Select the deployment branch and folder.
4. Save the settings.
5. Wait for GitHub Pages to publish the website.

### Cloudflare Workers AI

1. Open the Cloudflare Dashboard.
2. Open the `liya-ai` Worker.
3. Configure the Workers AI binding with the variable name `AI`.
4. Deploy the Worker.
5. Test the backend using a POST request containing a `message` field.

## 🔐 Security Notes

- Never publish API keys, passwords, or private credentials.
- Keep private configuration and secrets on the server side.
- Restrict backend access to trusted website origins where appropriate.
- Review Cloudflare usage limits and account settings.

## 🧪 Example

**User:**
```text
9 + 9 কত?
```

**Expected response:**
```text
18
```

AI responses may vary depending on the model and prompt.

## 🗺️ Roadmap

- [ ] Improve conversation history
- [ ] Add a clear-chat feature
- [ ] Add configurable AI personalities
- [ ] Improve error handling
- [ ] Explore voice input and output
- [ ] Add optional persistent chat history

## 👨‍💻 Developer

Created and maintained by the LIYA project developer.

## 📄 License

No license has been specified yet. All rights reserved unless a license is added to this repository.

---

**LIYA AI — Your Personal AI Assistant 💜**
