import { items, mapLocation, itemsLocations, backpack, render, itemsImages } from "./script.js";


export function takeItem() {
    let itemIndex = itemsLocations.findIndex(index => index === mapLocation);
    const uiDiv = document.getElementById("ui");

    if (itemIndex !== -1) {
        let itemName = items[itemIndex];
        console.log(itemName);
        backpack.push(itemName);
        items.splice(itemIndex, 1);
        itemsLocations.splice(itemIndex, 1);
        
        
        
        uiDiv.innerHTML += `<div class="slots" style="background-image: url('./assets/img/${itemsImages[itemIndex]}');"></div>`;
        
        console.log(itemName, itemIndex);
        console.log(backpack);
        console.log(items);
        console.log(itemsLocations);
        console.log(itemsImages);
        render();
    }

}




