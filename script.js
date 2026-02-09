// --- GREETING ---
function updateGreeting(userName) {
    const hour = new Date().getHours();
    let message = "Welcome";
    if (hour < 12) message = `Good Morning ${userName}`;
    else if (hour < 18) message = `Good Afternoon ${userName}`;
    else message = `Good Evening ${userName}`;

    document.getElementById("greeting").textContent = message;
}
updateGreeting("Kyle");

// --- CLOCK ---
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

//  --- THEME PICKER ---
const colorBg = document.getElementById("color-bg");
const colorText = document.getElementById("color-text");
const colorCard = document.getElementById("color-card");
const resetThemeBtn = document.getElementById("reset-theme");

function applyTheme(colors) {
    document.documentElement.style.setProperty("--bg", colors.bg);
    document.documentElement.style.setProperty("--text", colors.text);
    document.documentElement.style.setProperty("--card", colors.card);
}

function saveTheme(colors) {
    localStorage.setItem("themeColors", JSON.stringify(colors));
}

function loadTheme() {
    const saved = localStorage.getItem("themeColors");
    if (saved) {
        const colors = JSON.parse(saved);
        applyTheme(colors);

        // Update color pickers to match saved values
        colorBg.value = colors.bg;
        colorText.value = colors.text;
        colorCard.value = colors.card;
    }
}
function updateTheme() {
    const colors = {
        bg: colorBg.value,
        text: colorText.value,
        card: colorCard.value
    };

    applyTheme(colors);
    saveTheme(colors);
}
resetThemeBtn.addEventListener("click", () => {
    const defaultColors = {
        bg: "#f4f4f4",
        text: "#222222",
        card: "#ffffff"
    };

    applyTheme(defaultColors);
    saveTheme(defaultColors);

    colorBg.value = defaultColors.bg;
    colorText.value = defaultColors.text;
    colorCard.value = defaultColors.card;
});

colorBg.addEventListener("input", updateTheme);
colorText.addEventListener("input", updateTheme);
colorCard.addEventListener("input", updateTheme);
loadTheme();

// --- TO‑DO LIST ---
let todos = [];
function loadTodos() {
    const saved = localStorage.getItem("todos");
    if (saved) {
        todos = JSON.parse(saved);
        todos.forEach(text => addTodoToDOM(text));
    }
}

const addBtn = document.getElementById("add-todo");
const todoInput = document.getElementById("todo-text");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text === "") return;

    todos.push(text);
    saveTodos();
    addTodoToDOM(text);

    todoInput.value = "";
});
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

function addTodoToDOM(text) {
    const li = document.createElement("li");
    li.innerHTML = 
        `<span>${text}</span>
        <button class="delete">X</button>`;

    li.querySelector(".delete").addEventListener("click", () => {
        todos = todos.filter(t => t !== text);
        saveTodos();
        li.remove();
    });

    todoList.appendChild(li);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
loadTodos();
