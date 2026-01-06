import { items, mapLocation, itemsLocations, backpack, render, itemsImages } from "./script.js";


export function takeItem() {
    let itemIndex = itemsLocations.findIndex(index => index === mapLocation);
    const uiDiv = document.getElementById("ui");

    if (itemIndex !== -1) {
        let itemName = items[itemIndex];
        console.log(itemName);
        backpack.push(itemName);

        locationItemImage.style.display = "none";
        
        
        uiDiv.innerHTML += `<div class="slots" style="background-image: url('./assets/img/${itemsImages[itemIndex]}');"></div>`;
        
        console.log(backpack);
        console.log(items);
        render();
    }

}




