/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
function generateDomianName() {
  let randomPronounIndex = Math.floor(Math.random() * pronoun.length);
  let randomAdjIndex = Math.floor(Math.random() * adj.length);
  let randomNounIndex = Math.floor(Math.random() * noun.length);
  let randomExtIndex = Math.floor(Math.random() * ext.length);

  let generateDomianName = pronoun[randomPronounIndex] + adj[randomAdjIndex] + noun[randonNounIndex] + ext[randomExtIndex];

  console.log(domainName);

  document.getElementById("domainName").textContent = domainName;
}
  console.log("Hello Rigo from the console!");
};

