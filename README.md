# 🛒 SmartShop - Modern TypeScript E-Commerce Store

SmartShop is a high-performance, responsive e-commerce application built with **TypeScript** and **Sass**. It features a modular architecture, real-time filtering, and a fully functional shopping cart system.

![SmartShop Preview](./img.png)

---

## 🚀 Features

* **Type-Safe Development**: Entire logic built with TypeScript for robust error handling.
* **Modular Styling**: Advanced SCSS structure using `@use` modules and variables.
* **Dynamic Cart System**: Add, remove, and manage items with real-time total price calculation.
* **Smart Search**: Instant product filtering by name and category.
* **Fully Responsive**: Pixel-perfect UI optimized for Desktop, Tablet, and Mobile.
* **Modern UI**: Glassmorphism effects and smooth transitions.

---

## 🛠️ Tech Stack

* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styles:** [Sass/SCSS](https://sass-lang.org/) (Dart Sass)
* **Editor:** [WebStorm](https://www.jetbrains.com/webstorm/)
* **Compiler:** TSC (TypeScript Compiler)

---

## 📂 Project Structure

```text
E-Commerce-ts-app/
├── dist/                # Production-ready files (JS & CSS)
│   ├── css/             # Compiled Styles
│   └── app.js           # Compiled Logic
├── scss/                # Sass Source Files
│   ├── abstracts/       # _variables.scss
│   ├── components/      # _cards.scss
│   └── main.scss        # Entry Style
├── src/                 # TypeScript Source Files
│   ├── components/      # Cart.ts, ProductManager.ts
│   ├── models/          # Product.ts (Interfaces)
│   ├── utils/           # data.ts (Mock Data)
│   └── app.ts           # Root App Class
├── index.html           # HTML Entry Point
├── tsconfig.json        # TS Configuration
└── .gitignore           # Git Exclusions
```
## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

### 1. Clone the Repository
```bash
git clone [https://github.com/Asilbek2706/E-Commerce-ts-app.git](https://github.com/Asilbek2706/E-Commerce-ts-app.git)
cd E-Commerce-ts-app
```

### 2. Install Dependencies
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

### 3. Compiling TypeScript
   To convert your TS files into browser-readable JavaScript:
   ```bash
   # One-time compilation
tsc

# Watch mode (Auto-compile on save)
tsc --watch
```
### 3.Compiling Sass
   To compile your SCSS files into CSS:
   ```bash
   # Using Dart Sass
sass scss/main.scss dist/css/main.css --watch
   ```

### 5. Running the App
Since this is a frontend-only application, you can simply open `index.html` in your browser. For the best experience in **WebStorm**:

* **Right-click** `index.html`.
* Select **'Open in Browser'**.

## 📱 Responsive Design Breakpoints

The app is fully optimized for all devices to provide a seamless user experience:

* **Desktop (1200px+):** Layout uses a grid with **3 or 4 columns** for maximum visibility.
* **Tablet (768px):** Layout switches to a **2-column grid** for better spacing.
* **Mobile (480px):** Layout uses a **single column (full width)** for easy navigation and touch targets.

---

## 👤 Author

**Asilbek**

* **GitHub:** [@Asilbek2706](https://github.com/Asilbek2706)

---
*If you find this project helpful, please consider giving it a ⭐ on GitHub!*

