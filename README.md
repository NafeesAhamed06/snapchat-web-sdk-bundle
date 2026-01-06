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

## 🚀 Usage

### 1️⃣ Include the bundle

```html
<script src="snapchat-sdk.bundle.js"></script>
```

### User In Javascript

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
