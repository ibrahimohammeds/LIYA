# LIYA — Beginner prototype

This is a free, static mobile-friendly web app prototype. It can be added to an iPhone Home Screen after hosting it over HTTPS.

## Files
- `index.html` — app UI and sample demo replies
- `manifest.json` — web app metadata
- `sw.js` — basic offline caching

## Important
This version is **not connected to a live AI model**. Replies are sample responses. Do not enter private or sensitive information. A live AI connection usually requires an API and a secure server/backend; API usage may cost money. Never put secret API keys in browser JavaScript.

## Quick local test
Open `index.html` in a browser on your computer. For service-worker/PWA behavior, host the files over HTTPS.

## Free hosting idea: GitHub Pages
1. Sign in at https://github.com/ and create a **public** repository named `liya-assistant`.
2. Upload all three files to the repository's root.
3. Open repository **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**, choose `main` and `/(root)`, then Save.
5. Wait for the published HTTPS URL to appear in Settings → Pages.

A public repository means the source code is visible to others. Do not upload secrets, API keys, or personal data.

## Add to iPhone
1. Open the published HTTPS URL in Safari.
2. Tap Share.
3. Choose **Add to Home Screen**.
4. If shown, enable **Open as Web App**, then tap Add.

This creates a Home Screen shortcut/web app, not a native App Store app.
