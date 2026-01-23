export default function loadHome(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    const box = document.createElement("div");
    box.classList.add("box");
    //taglines
    const tagLine = document.createElement("div");
    tagLine.textContent = "Where every bite tells a story";
    tagLine.classList.add("tagLine");
    //testimonial
    const testimonial = document.createElement("div");
    testimonial.classList.add("testimonial");
    //inside of testimonial
    const lines = document.createElement("div");
    lines.textContent = "The Hungry Owl serves some of the best porridge I’ve ever had! The cozy atmosphere and friendly service make you feel like you’re tucked away in the middle of the woods—eating happily, just like an owl. It’s exactly the kind of place that keeps calling me back again and again.";
    lines.classList.add("lines");
    const by = document.createElement("div");
    by.textContent = "The-Hungry-Owl";
    by.classList.add("by");
    testimonial.append(lines,by);
    //timing
    const timing = document.createElement("div");
    timing.classList.add("timing");
    //inside timming
    const timeTop = document.createElement("div");
    timeTop.textContent = "Hours";
    timeTop.classList.add("timeTop");
    const days = document.createElement("ul");
    days.classList.add("days");
    days.innerHTML = `
    <li class="day">Sunday: 8am – 8pm</li>
    <li class="day">Monday: 6am – 6pm</li>
    <li class="day">Tuesday: 6am – 6pm</li>
    <li class="day">Wednesday: 6am – 6pm</li>
    <li class="day">Thursday: 6am – 10pm</li>
    <li class="day">Friday: 6am – 10pm</li>
    <li class="day">Saturday: 8am – 10pm</li>`;
    timing.append(timeTop,days);
    //location
    const location = document.createElement("div");
    location.classList.add("location");
    //inside location
    const locaTop = document.createElement("div");
    locaTop.textContent = "Location";
    locaTop.classList.add("locaTop");
    const addres = document.createElement("div");
    addres.textContent = "123 forest Drive, Delhi, India";
    addres.classList.add("addres");
    location.append(locaTop,addres);
    box.append(tagLine,testimonial,timing,location);
    content.append(box);
}