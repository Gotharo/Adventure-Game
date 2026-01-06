import { items, mapLocation, backpack, render } from "./script.js";


export function takeItem() {
    let itemIndex = items.findIndex(item => item.location === mapLocation);


    if (itemIndex !== -1) {
        backpack.push(items[itemIndex].name);
        items.splice(itemIndex, 1);
        locationItemImage.style.display = "none";

        console.log(itemIndex);
        console.log(backpack);
        console.log(items);
        console.log(mapLocation);
        render();
        renderBackpack();
    }

}


export function renderBackpack() {
    let uiDiv = document.getElementById("ui");
    uiDiv.innerHTML = "";
    for (let packs of backpack) {

        console.log(packs);
        uiDiv.innerHTML += `<div class="slots" style="background-image: url('./assets/img/${packs}.png');"></div>`;
    }



}

