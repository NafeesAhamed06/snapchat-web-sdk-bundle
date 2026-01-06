# Snapchat Web SDK Bundle

> 🚧 Unofficial browser bundle for Snapchat’s TypeScript-first SDK  
> Built with Vite to enable usage in plain HTML and vanilla JavaScript projects.

---

## ✨ Why this exists

Snapchat’s official SDKs are primarily designed for **TypeScript and modern build systems**.  
This makes it difficult to use them directly in:

- Plain HTML + JS projects
- Legacy apps
- Simple static sites
- Script-tag based integrations

This project solves that by:

✅ Bundling the SDK using **Vite**  
✅ Exposing a **browser-friendly JavaScript build**  
✅ Removing the need for TypeScript or complex tooling  

---

## 📦 What this project does

- Uses **Vite** to bundle Snapchat’s SDK
- Outputs a **single browser-compatible JS file**
- Works with:
  - Vanilla JavaScript
  - Plain HTML
  - Any framework that supports script imports

---

## ⚙️ Installing

Install Latest Version Package From [Release](https://github.com/NafeesAhamed06/snapchat-web-sdk-bundle/releases)

**OR**

You Can Bundle Your Own By Cloning This Repo And Running:
```bash
npm i

npx vite build
```

## 🚀 Usage

### 1️⃣ Include the bundle

```html
<script src="snap-camera.iife.js"></script>
```

### 2️⃣ Using In Javascript

```javascript
let snapCamera;

initSnapCamera({
  apiToken: "YOUR_API_KEY_TOKEN",
  lensId: "YOUR_LENS_ID",
  lensGroupId: "YOUR_LENS_GROUP_ID",
  videoElement: document.getElementById("canvas"),
}).then((sc) => {
  snapCamera = sc;
  console.log("Snap Camera initialized successfully", snapCamera);
});
```

Make Sure To Pass Your Canvas Element id in VideoElement

(Refer to Snapchat’s official documentation for API usage.)

### 3️⃣ Applying Filter

```javascript
const lens = await snapCamera.cameraKit.lensRepository.loadLens(
        FILTER_ID,
        FILTER_GROUP_ID
    );

await snapCamera.session.applyLens(lens);
```
### 4️⃣ Removing Filter
```javascript
snapCamera.session.removeLens();
```

### ⚠️ Disclaimer

This is an unofficial project and is not affiliated with, endorsed by, or maintained by Snapchat.

All trademarks, logos, and brand names belong to their respective owners.

This repository does not modify Snapchat’s SDK source code — it only bundles it for easier browser usage.
