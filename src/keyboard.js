//#region set a vars
const robotjs = require("robotjs");
robotjs.setKeyboardDelay(200);

//#region Open a command line
    robotjs.keyTap("r", "command")
    robotjs.setKeyboardDelay(1);
    robotjs.typeString('"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"');
    robotjs.setKeyboardDelay(1000);
    robotjs.keyTap("enter");
    robotjs.setKeyboardDelay(500);
    robotjs.keyTap("n",["control", "shift"]);
    robotjs.typeString("wherever to search");
    robotjs.keyTap("enter");
    robotjs.setMouseDelay(200)
    robotjs.moveMouse(235,209);
    robotjs.mouseClick();