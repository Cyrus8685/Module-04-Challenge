let submitBtn = document.getElementById("submit-btn");
//userName.length = Math.min(userName.length, 5);

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

submitBtn.addEventListener("click",  async function (submit) {

const Users = [];
let currentUsernames = JSON.parse(localStorage.getItem('Username'));

if (currentUsernames == null) {
     currentUsernames = [];
};

if (currentUsernames.length >= 5) {
     currentUsernames.length = 0;
};

const newUsername= document.getElementById('username').value;
if (newUsername == "") {
  submit.preventDefault();
  alert("Please enter your Username");}

  else {

if (currentUsernames === null) {
  Users.push(newUsername);
  localStorage.setItem('Username', JSON.stringify(Users));

} else {
currentUsernames.push(newUsername);
localStorage.setItem('Username', JSON.stringify(currentUsernames));
}
  };

const Title = [];
let currentTitles = JSON.parse(localStorage.getItem('Title'));

if (currentTitles == null) {
  currentTitles = [];
};

if (currentTitles.length >= 5) {
  currentTitles.length = 0;
};

const newTitle= document.getElementById('title').value;

if (newTitle == "") {
  submit.preventDefault();
  alert("Please enter your Title");}

  else {
if (currentTitles === null) {
  Title.push(newTitle);
  localStorage.setItem('Title', JSON.stringify(Title));

} else {
currentTitles.push(newTitle);
localStorage.setItem('Title', JSON.stringify(currentTitles));
}
  };

const Content = [];
let currentContent = JSON.parse(localStorage.getItem('Content'));
if (currentContent == null) {
  currentContent = [];
}

if (currentContent.length >= 5) {
  currentContent.length = 0;
};

const newContent= document.getElementById('content').value;
if (newContent == "") {
  submit.preventDefault();
  alert("Please enter your Content");} 

  else {
if (currentContent === null) {
  Content.push(newContent);
  localStorage.setItem('Content', JSON.stringify(Content));
} 
else {
  currentContent.push(newContent);
localStorage.setItem('Content', JSON.stringify(currentContent));
}}

if (newUsername !== "" & newTitle !== "" & newContent !== "") {

 window.location.assign('/MyFirstBlog/assets/html/blog.html');
}

});

