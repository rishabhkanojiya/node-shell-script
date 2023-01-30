const { freePropSteps, vulStep } = require("./steps/freeProp");
const { commandExec } = require("./utils");

let dir = "/Users/rishabhkanojiya/Desktop/Projects/PixelBin/FrontEnd";
const main = () => {
  commandExec(
    dir,
    vulStep,
    [
      // "sakura",
      "sai",
      //  "suigetsu", "sarada",
      // "mitsuki",
      "satetsu",
    ]
    // true
  );
};

main();
