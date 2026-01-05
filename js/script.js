import { images, map, blockedPathMessages } from "./arrays.js";


let mapLocation = 4;

let output = document.getElementById("output");
output.innerHTML = map[mapLocation];

let gameMessage = "";

let actionIKnow = ["north", "south", "east", "west"];
let action = "";

let buttonNorth = document.getElementById("north");
let buttonSouth = document.getElementById("south");
let buttonWest = document.getElementById("west");
let buttonEast = document.getElementById("east");

let locationImage = document.getElementById("locationImage");

buttonNorth.addEventListener("click", clickHandler, false);
buttonSouth.addEventListener("click", clickHandler, false);
buttonWest.addEventListener("click", clickHandler, false);
buttonEast.addEventListener("click", clickHandler, false);


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
        default:
            gameMessage = "I don't understand that.";
    }

    render();

}


function render() {
    output.innerHTML = map[mapLocation];
    locationImage.src = `./assets/img/${images[mapLocation]}`;
    output.innerHTML += "<br><em>" + gameMessage + "</em>";
}
