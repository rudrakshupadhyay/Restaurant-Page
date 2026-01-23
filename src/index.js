import loadHome from "./home";
import loadMenu from "./menu";
import loadContect from "./contect";
import cupLogo from "./cuplogo.svg";
import "./styles.css";

(() => { 
    const logo = document.querySelector(".logo");
    console.log(logo);
    const Image = document.createElement("img");
    Image.src = cupLogo;
    Image.classList.add("logoPhoto");
    logo.appendChild(Image)})();

console.log("hello bro");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
let currTab = "none";
const bnt = [home,menu,contact];
home.addEventListener("click", () => {
    if(currTab === "home") return;
    loadContect();
    currTab = "home";
});
   