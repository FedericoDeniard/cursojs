// Get references to DOM elements
const typeBox = document.getElementById("todo");
const submit = document.querySelector("button");
const tasksList = document.getElementById("tasks");

// Load tasks from localStorage when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach((task) => {
    createTaskElement(task.text, task.completed);
  });
});

// Function to add a new task
function addTask() {
  if (typeBox.value) {
    // Create task element and add it to the DOM
    createTaskElement(typeBox.value, false);
    typeBox.value = "";

    // Save tasks to localStorage
    saveTasksToLocalStorage();
  } else {
    alert("Type a task");
  }
}

// Function to create a task element
function createTaskElement(taskText, completed) {
  let newTask = document.createElement("div");
  newTask.classList.add("task");

  let text = document.createElement("p");
  text.innerText = taskText;
  newTask.appendChild(text);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed; // Set the checkbox state based on 'completed'
  newTask.appendChild(checkbox);

  let remove = document.createElement("i");
  remove.classList.add("bi", "bi-x", "remove-task");
  newTask.appendChild(remove);

  // Set the 'completed' class based on the 'completed' parameter
  if (completed) {
    newTask.classList.add("completed");
  }

  tasksList.appendChild(newTask);

  // Add event listeners for checkbox and remove actions
  checkbox.addEventListener("change", completeTask);
  remove.addEventListener("click", removeTask);
}

// Function to handle task completion
function completeTask(e) {
  let checkbox = e.target;
  let task = e.target.parentNode;
  if (checkbox.checked) {
    task.classList.add("completed");
  } else {
    task.classList.remove("completed");
  }

  // Update tasks in localStorage
  saveTasksToLocalStorage();
}

// Function to handle task removal
function removeTask(e) {
  let task = e.target.parentNode;
  task.remove();

  // Update tasks in localStorage
  saveTasksToLocalStorage();
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage() {
  const tasks = Array.from(tasksList.children).map((task) => {
    return {
      text: task.querySelector("p").innerText,
      completed: task.classList.contains("completed"),
    };
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event listeners for adding tasks on button click and Enter key press
submit.addEventListener("click", addTask);

typeBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
