//4.  Implement a program that simulates a traffic light. The program should take a color as input and print the corresponding action (stop, slow down, go) using switch.

const color = "red";

switch (color) {
    case "green":
        console.log("You can go.");
        break;
    case "red":
        console.log("Please stop your vehicle.");
        break;
    case "yellow":
        console.log("Please Slow down your vehicle.");
        break;
}