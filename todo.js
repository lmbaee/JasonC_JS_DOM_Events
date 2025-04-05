// Select Elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Create List Item
function createListItem(taskText) {
  let listItem = document.createElement("li");
  listItem.textContent = taskText;

  // Toggle completion on click
  listItem.addEventListener("click", function() {
    listItem.classList.toggle("completed");
  });

  return listItem;
}

// Add Task
function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let listItem = createListItem(taskText);
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input field
  }
}

// Event Listener
addTaskButton.addEventListener("click", addTask);
