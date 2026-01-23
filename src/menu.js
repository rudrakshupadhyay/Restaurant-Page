export default function loadMenu(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    const box = document.createElement("div");
    box.classList.add("box");
    //menu
    const tagLine = document.createElement("div");
    tagLine.textContent = "Menu";
    tagLine.classList.add("tagLine");
    //menuGroup1
    const menuGroup1 = document.createElement("div");
    menuGroup1.classList.add("menuGroup");
    menuGroup1.innerHTML = `
                        <div class="tagLine menuSubTop">Beverages</div>
                        <div class="item">
                            <div class="itemTop">Honey Tea</div>
                            <div class="discr">A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</div>
                            <div class="itemTop">$2</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">Beary Tea</div>
                            <div class="discr">A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.</div>
                            <div class="itemTop">$3</div>
                        </div>
    `;
    //menuGroup2
    const menuGroup2 = document.createElement("div");
    menuGroup2.classList.add("menuGroup");
    menuGroup2.innerHTML = `
                        <div class="tagLine menuSubTop">Sides</div>
                        <div class="item">
                            <div class="itemTop">Toast and Jam</div>
                            <div class="discr">A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</div>
                            <div class="itemTop">$1</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">Fresh Fruit</div>
                            <div class="discr">A small bowl of fresh fruit, whatever we find at the market for the day.</div>
                            <div class="itemTop">$3</div>
                        </div>
    `;
    //menuGroup3
    const menuGroup3 = document.createElement("div");
    menuGroup3.classList.add("menuGroup");
    menuGroup3.innerHTML = `
                        <div class="tagLine menuSubTop">Main Dishes</div>
                        <div class="item">
                            <div class="itemTop">Pancakes</div>
                            <div class="discr">A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.</div>
                            <div class="itemTop">$4</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">French Toast</div>
                            <div class="discr">Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.</div>
                            <div class="itemTop">$5</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">Beary Veggie Sandwich</div>
                            <div class="discr">Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.</div>
                            <div class="itemTop">$8</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">BLT</div>
                            <div class="discr">Interested in the Beary Veggie Sandwich but also love bacon? Say no more.</div>
                            <div class="itemTop">$6</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">Bagel and Lox</div>
                            <div class="discr">Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</div>
                            <div class="itemTop">$8</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">Honeycomb</div>
                            <div class="discr">Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.</div>
                            <div class="itemTop">$6</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">Beary Bowl</div>
                            <div class="discr">Get a big ole bowl of our berries! Side of honey is $1 extra.</div>
                            <div class="itemTop">$7</div>
                        </div>
                        <div class="item">
                            <div class="itemTop">The Beary Best Porridge</div>
                            <div class="discr">Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.</div>
                            <div class="itemTop">$5</div>
                        </div>
    `;
    box.append(tagLine,menuGroup1,menuGroup2,menuGroup3);
    content.append(box);
}