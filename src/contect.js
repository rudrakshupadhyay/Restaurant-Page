export default function loadContect(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    const box = document.createElement("div");
    box.classList.add("box");
    // menuGroup
    const tagLine = document.createElement("div");
    tagLine.textContent = "Contact Us";
    tagLine.classList.add("tagLine");
    const menuGroup = document.createElement("div");
    menuGroup.classList.add("menuGroup");
    menuGroup.innerHTML = `
                        <div class="item">
                            <div class="contItemTop">Mama Owl</div>
                            <div class="contCheif">Chef<br>555-555-5554<br>totallyRealEmail@notFake.com</div>
                        </div>
                        <div class="item">
                            <div class="contItemTop">Papa Owl</div>
                            <div class="contCheif">Manager<br>555-555-5555<br>perfectlyRealEmail@notFake.com</div>
                        </div>
                        <div class="item">
                            <div class="contItemTop">Baby Owl</div>
                            <div class="contCheif">Waiter<br>555-555-5556<br>totallyRealEmail@notFake.com</div>
                        </div>
    `;
    box.append(tagLine,menuGroup);
    content.append(box);
}