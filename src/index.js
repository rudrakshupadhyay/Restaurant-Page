import loadHome from "./home";
import loadMenu from "./menu";
import loadContect from "./contect";
import cupLogo from "./cuplogo.svg";
import "./styles.css";

(() => { 
    const logo = document.querySelector(".logo");
    const Image = document.createElement("img");
    Image.src = cupLogo;
    Image.classList.add("logoPhoto");
    logo.appendChild(Image)})();


const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

const bnt = [home,menu,contact];

function setActive(currbnt){
    bnt.forEach(b =>{
        b.classList.remove("currActive");
    });
    currbnt.classList.add("currActive");
}
loadHome();
setActive(home);
home.addEventListener("click",() => {
    loadHome();
    setActive(home);
});
menu.addEventListener("click",() => {
    loadMenu();
    setActive(menu);
});
contact.addEventListener("click",() => {
    loadContect();
    setActive(contact);
});
   