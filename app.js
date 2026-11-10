// 1. State: tasks live in an array of objects
let tasks = [];

// 2. Grab the elements we need
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const errorMsg = document.querySelector("#error");
const list = document.querySelector("#task-list");

// 3. Redraw the whole list from the array
function render() {
  list.textContent = ""; // clear the list
function render() {
  list.textContent = "";

  // Pick which tasks to show
  const visible = tasks.filter((task) => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  visible.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.classList.toggle("completed", task.completed);

    const text = document.createElement("span");
    text.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.append(text, deleteBtn);
    list.append(li);
  });

  // "items left" counts only active tasks
  const left = tasks.filter((task) => !task.completed).length;
  count.textContent = left === 1 ? "1 item left" : `${left} items left`;

  // Highlight the selected filter button
  filters.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === currentFilter);
  });
}
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.classList.toggle("completed", task.completed);

    const text = document.createElement("span");
    text.textContent = task.text; // textContent, never innerHTML

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.append(text, deleteBtn);
    list.append(li);
  });
}

// 4. Add a task (button click and Enter both trigger "submit")
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = input.value.trim();

  if (value === "") {
    errorMsg.textContent = "Please enter a task.";
    errorMsg.classList.remove("hidden");
    return;
  }

  errorMsg.classList.add("hidden");

  tasks.push({
    id: Date.now(),
    text: value,
    completed: false,
  });

  input.value = "";
  render();
});
// Filter buttons
filters.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  currentFilter = btn.dataset.filter;
  render();
});

// Clear Completed
clearBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  render();
});

// Draw once at the start so the count shows "0 items left"
render();