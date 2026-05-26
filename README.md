# Interactive Counter App

A clean, modern, and responsive web-based counter application built using vanilla HTML, CSS, and JavaScript. This project serves as a foundational example of how the three core technologies of the web interact with each other to create an interactive user experience.

## 🚀 Features

- **Dynamic Interaction:** Increase or decrease the counter value in real-time.
- **Smart Color States:** The counter text color dynamically changes based on the value:
  - 🟢 **Green** for positive numbers.
  - 🔴 **Red** for negative numbers.
  - 🔵 **Blue** for zero.
- **One-Click Reset:** Instantly reset the counter value back to zero.
- **Sleek UI Design:** Fully centered card layout featuring subtle gradients, shadows, and smooth micro-interactions (hover and active click scaling effects).
- **Responsive Layout:** Adapts flawlessly across different screen sizes.

## 📂 File Structure

    interactive-counter/
    ├── index.html   # The structural skeleton of the app
    ├── style.css    # Presentational styling and visual layouts
    └── script.js    # Behavioral logic and DOM manipulation

## 🛠️ How to Setup and Run

You don't need any local servers, build tools, or external libraries to run this project. It runs entirely in your web browser.

1. **Create a project folder** on your computer named `interactive-counter`.
2. **Create the files:** Inside that folder, create three separate files named exactly:
   - `index.html`
   - `style.css`
   - `script.js`
3. **Copy the code:** Paste the respective code blocks provided in the main guide into each file and save them.
4. **Launch the app:** Double-click the `index.html` file, or right-click it and choose **Open With**, then select your favorite web browser (Chrome, Edge, Firefox, Safari).

## 💡 How It Works

- **HTML (`index.html`):** Defines the structure by setting up a container card, a heading, a designated area to display the counter value, and three separate action buttons.
- **CSS (`style.css`):** Uses a Flexbox layout to center the card on the viewport. It introduces a modern design language using rounded corners, custom font stacks, neutral backgrounds, and scaling transformations when buttons are clicked.
- **JavaScript (`script.js`):** Hooks into the HTML buttons using Document Object Model (DOM) event listeners (`addEventListener`). When an action occurs, it modifies an internal `count` variable and explicitly updates the visible text and text styles inside the browser interface.

## 📝 License

This project is open-source and free to use for educational purposes. Feel free to tweak, expand, or modify it as you learn!