import { images, map, blockedPathMessages } from "./arrays.js";
import { takeItem, dropItem } from "./items.js";


export let mapLocation = 4;

let output = document.getElementById("output");
output.innerHTML = map[mapLocation];

export let gameMessage = "";

let actionIKnow = ["north", "south", "east", "west", "take", "use", "drop"];
let action = "";

export let backpack = [];




let buttonNorth = document.getElementById("north");
let buttonSouth = document.getElementById("south");
let buttonWest = document.getElementById("west");
let buttonEast = document.getElementById("east");

let locationImage = document.getElementById("locationImage");
let locationItemImage = document.getElementById("locationItemImage");

buttonNorth.addEventListener("click", clickHandler, false);
buttonSouth.addEventListener("click", clickHandler, false);
buttonWest.addEventListener("click", clickHandler, false);
buttonEast.addEventListener("click", clickHandler, false);

export let items = [
    { name: "flute", location: 0, image: "flute.png" },
    { name: "stone", location: 5, image: "stone.png" },
    { name: "sword", location: 8, image: "sword.png" }
];

render();

function clickHandler(event) {
    playGame(event);
}

function playGame(event) {
    gameMessage = "";
    action = "";

    if (event && event.target) {
        const btnId = event.target.id;
        switch (btnId) {
            case "north":
                action = "north";
                break;

            case "south":
                action = "south";
                break;
            case "east":
                action = "east";
                break;
            case "west":
                action = "west";
                break;
        }
        if (action) {
            console.log(`player wants to go ${action}`);
        }
    }
    switch (action) {
        case "north":
            if (mapLocation >= 3) {
                mapLocation -= 3;
            }
            else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;
        case "east":
            if (mapLocation % 3 != 2) {
                mapLocation += 1;
            }
            else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;
        case "south":
            if (mapLocation < 6) {
                mapLocation += 3;
            }
            else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;
        case "west":
            if (mapLocation % 3 != 0) {
                mapLocation -= 1;
            }
            else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "take":
            takeItem()
            break;
        // case "use":
        //     useItem()
        //     break;
        case "drop":
            dropItem()
            break;
        default:
            gameMessage = "I don't understand that.";
    }

    render();

}



export function render() {
    locationItemImage.style.display = "none";
    output.innerHTML = map[mapLocation];

    locationImage.src = `./assets/img/${images[mapLocation]}`;

    locationItemImage.addEventListener("click", takeItem);

    for (let item of items) {
        if (item.location === mapLocation) {
            locationItemImage.style.display = "block";
            locationItemImage.src = `./assets/img/${item.image}`;
            output.innerHTML += "<br>You see a " + item.name + " here.";
        }
    }
    output.innerHTML += "<br><em>" + gameMessage + "</em>";

}
