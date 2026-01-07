import { items, mapLocation, backpack, render } from "./script.js";


export function takeItem() {
    let itemIndex = items.findIndex(item => item.location === mapLocation);


    if (itemIndex !== -1) {
        backpack.push(items[itemIndex].name);
        items.splice(itemIndex, 1);
        // ...eliminado: locationItemImage ya no se usa...

        render();
        renderBackpack();
    }

}

export function dropItem() {
    for (let itemsInBackpack of backpack) {
        items.push({ 
            name: itemsInBackpack, 
            location: mapLocation, 
            image: `${itemsInBackpack}.png` 
        });
        backpack.splice(backpack.indexOf(itemsInBackpack), 1);
        render();
        renderBackpack();
        break;
    }


    // let droppedItem = backpack.pop();
    // items.push({ name: droppedItem, location: mapLocation });
    // render();
    // renderBackpack();
}




export function renderBackpack() {
    let uiDiv = document.getElementById("ui");
    uiDiv.innerHTML = "";
    for (let packs of backpack) {
        console.log(backpack);
        console.log(items);
        console.log(packs);
        uiDiv.innerHTML += `<div class="slots" style="background-image: url('./assets/img/${packs}.png');"></div>`;


    }
    uiDiv.addEventListener("click", dropItem);



}


