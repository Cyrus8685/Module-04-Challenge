

/* const userName = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit-btn');
/* const AddEmployeesButton = document.getElementById('add-employees-btn'); */
/*const outputUsername = document.getElementById('usernameOutput');
const outputTitle = document.getElementById('titleOutput');
const outputContent = document.getElementById('contentOutput');

function CreateBlog() {
      outputUsername.innerHTML = userName.value;
      outputTitle.innerHTML = title.value;
      outputContent.innerHTML = content.value;

}

submitButton.addEventListener('click', CreateBlog); */

// Get the root element
const root = document.documentElement;
// Get the toggle button
const toggle = document.getElementById("colormode");
// Get the user's preference from localStorage
const darkMode = localStorage.getItem("dark-mode");
// Check if the user has already chosen a theme
if (darkMode) {
  // If yes, apply it to the root element
  root.classList.add("dark-theme");
}
// Add an event listener to the toggle button
toggle.addEventListener("click", () => {
  // Toggle the dark-theme class on the root element
  root.classList.toggle("dark-theme");
  // Store or remove the user's preference in localStorage
  if (root.classList.contains("dark-theme")) {
    localStorage.setItem("dark-mode", true);
  } else {
    localStorage.removeItem("dark-mode");
  }
});