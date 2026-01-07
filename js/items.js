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

export function dropItem(itemName) {
    const index = backpack.indexOf(itemName);
    if (index !== -1) {
        items.push({
            name: itemName,
            location: mapLocation,
            image: `${itemName}.png`
        });
        backpack.splice(index, 1);
        render();
        renderBackpack();
    }
}




export function renderBackpack() {
    let uiDiv = document.getElementById("ui");
    uiDiv.innerHTML = "";
    for (let packs of backpack) {
        console.log(backpack);
        console.log(items);
        console.log(packs);
        let slotDiv = document.createElement("div");
        slotDiv.className = "slots";
        slotDiv.style.backgroundImage = `url('./assets/img/${packs}.png')`;
        slotDiv.addEventListener("click", () => dropItem(packs));
        uiDiv.appendChild(slotDiv);


    }
    uiDiv.addEventListener("click", dropItem);



}


