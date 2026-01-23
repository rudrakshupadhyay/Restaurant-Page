import loadHome from "./home";
import loadMenu from "./menu";
import cupLogo from "./cuplogo.svg";
import "./styles.css";

const logo = document.querySelector(".logo");
console.log(logo);
const Image = document.createElement("img");
Image.src = cupLogo;
Image.classList.add("logoPhoto");
logo.appendChild(Image);
console.log("hello bro");
let currTab = "none";
const home = document.getElementById("home");
home.addEventListener("click", () => {
    if(currTab === "home") return;
    loadMenu();
    currTab = "home";
});
   