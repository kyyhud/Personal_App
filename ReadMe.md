# Demo Personal App (JavaScript Knowledge Project)

A front-end portfolio project built with **HTML, CSS, and vanilla JavaScript** that showcases foundational JS concepts through interactive widgets and mini-apps.

## Project Purpose

A knowledge-display dashboard designed to translate core JavaScript fundamentals into real, user-facing functionality — without frameworks. It demonstrates how isolated concepts like DOM manipulation, event handling, and data persistence come together in a cohesive, multi-page application.

## Skills & Concepts Demonstrated

- **DOM manipulation** — dynamic content rendering, element selection, and real-time UI updates
- **Event handling** — `click`, `keypress`, `keydown`, and `transitionend` events across multiple interfaces
- **Form validation** — input handling and basic login/to-do validation logic
- **localStorage** — persists theme preferences and to-do items across sessions
- **Date/Time API** — powers a live clock and context-aware greeting based on time of day
- **Inclusive range randomization** — computes random values between user-defined minimum and maximum bounds
- **Real-time UI feedback** — displays success/error output messages based on input state
- **Input parsing and type conversion** — handles numeric user input safely before calculations
- **Validation-first logic** — uses guard clauses to block invalid input and prevent runtime issues
- **Calculator logic** — handles operators, backspace, clear, sign change, and expression evaluation
- **DJ Game interaction** — maps keyboard keys and click events to audio playback with visual feedback
- **Modular structure** — separates concerns across a dashboard, calculator, and drum kit with shared navigation

## Features

### 1. Login Page

- Simple username/password validation in `login.html`
- Redirects to dashboard on successful login

### 2. Dashboard (`index.html`)

- Dynamic greeting based on time of day
- Live digital clock
- Custom range random number generator with min/max input, validation rules, and inclusive random output
- To-Do list with add/delete functionality
- Theme customizer (background, text, card colors)
- Theme + to-do persistence using `localStorage`

### 3. Calculator Mini-App

- Basic arithmetic operations
- Number/operator input with backspace, clear (`C`), and clear entry (`CE`)
- Sign change (`+/-`) and expression evaluation

### 4. DJ Game Mini-App

- Keyboard support (`A S D F G H J K L`)
- Click-to-play key pads with audio playback and key animation

## Folder Structure

```text
Demo_Personal_App/
|-- index.html
|-- login.html
|-- script.js
|-- style.css
|-- ReadMe.md
|-- Calculator/
|   |-- Calculator.html
|   |-- CalculatorScript.js
|   `-- CalculatorStyle.css
`-- DrumKit/
    |-- drum-index.html
    |-- drum-style.css
    `-- sounds/
```

## How To Run

1. Open the project folder in VS Code.
2. Start with `login.html` in a browser (or using Five Server / Live Server).
3. Login using username `username` and password `password`.
4. Explore the dashboard widgets and mini-app links.

## Next Improvements

- Improve mobile responsiveness across all widgets
- Add keyboard shortcuts for calculator actions
- Enhance the authentication flow (demo-safe)
