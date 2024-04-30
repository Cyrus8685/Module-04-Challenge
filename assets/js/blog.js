let title = JSON.parse(localStorage.getItem('Title'));
let content = JSON.parse(localStorage.getItem('Content'));
let userName = JSON.parse(localStorage.getItem('Username'));

let title1 = document.getElementById("title1");
let postname1 = document.getElementById("postname1");
let content1 = document.getElementById("content1");

let title2 = document.getElementById("title2");
let postname2 = document.getElementById("postname2");
let content2 = document.getElementById("content2");

let title3 = document.getElementById("title3");
let postname3 = document.getElementById("postname3");
let content3 = document.getElementById("content3");

let title4 = document.getElementById("title4");
let postname4 = document.getElementById("postname4");
let content4 = document.getElementById("content4");

let title5 = document.getElementById("title5");
let postname5 = document.getElementById("postname5");
let content5 = document.getElementById("content5");

let back = document.getElementById("back");

if (title[0]  || "") {title1.textContent = `${title[0]}`;}
if (content[0]  || "") {content1.textContent = `${content[0]}`;}
if (userName[0] || "") {postname1.textContent = `${userName[0]}`;}

if (title[1]  || "") {title2.textContent = `${title[1]}`;}
if (content[1]  || "") {content2.textContent = `${content[1]}`;}
if (userName[1] || "") {postname2.textContent = `${userName[1]}`;}

if (title[2]  || "") {title3.textContent = `${title[2]}`;}
if (content[2]  || "") {content3.textContent = `${content[2]}`;}
if (userName[2] || "") {postname3.textContent = `${userName[2]}`;}


if (title[3]  || "") {title4.textContent = `${title[3]}`;}
if (content[3]  || "") {content4.textContent = `${content[3]}`;}
if (userName[3] || "") {postname4.textContent = `${userName[3]}`;}

if (title[4]  || "") {title5.textContent = `${title[4]}`;}
if (content[4]  || "") {content5.textContent = `${content[4]}`;}
if (userName[4] || "") {postname5.textContent = `${userName[4]}`;}

back.addEventListener('click',  async function () {
      window.location.assign('index.html');
}); 