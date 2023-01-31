const { freePropSteps, vulStep } = require("./steps/freeProp");
const { commandExec } = require("./utils/execUtils");

let dir = "/Users/rishabhkanojiya/Desktop/Projects/PixelBin/FrontEnd";
const main = () => {
  commandExec(
    dir,
    vulStep,
    ["sai", "suigetsu", "sakura", "sarada", "mitsuki", "satetsu"],
    true
  );
};

main();
