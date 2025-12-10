import { images, map } from "./arrays.js";


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
            mapLocation -= 3;
            break;
        case "east":
            mapLocation += 1;
            break;
        case "south":
            mapLocation += 3;
            break;
        case "west":
            mapLocation -= 1;
            break;
    }

    render();

}


function render() {
    output.innerHTML = map[mapLocation];
    locationImage.src = `./assets/img/${images[mapLocation]}`;
    output.innerHTML += "<br><em>" + gameMessage + "</em>";
}
