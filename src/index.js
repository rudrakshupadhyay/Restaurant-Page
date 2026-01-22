import cupLogo from "./cuplogo.svg";
import "./styles.css";

const logo = document.querySelector(".logo");
console.log(logo);
const Image = document.createElement("img");
Image.src = cupLogo;
Image.classList.add("logoPhoto");
logo.appendChild(Image);
console.log("hello bro");