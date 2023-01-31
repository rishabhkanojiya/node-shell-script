// const { freePropSteps, vulStep } = require("./steps/freeProp");
const { mergeStep } = require("./steps/gitSteps");
const { commandExec } = require("./utils/execUtils");

const main = () => {
  let dir = "/Users/rishabhkanojiya/Desktop/Projects/PixelBin/FrontEnd";

  commandExec(
    dir,
    mergeStep,
    ["sai", "suigetsu", "sakura", "sarada", "mitsuki", "satetsu"],
    true
  );
};

main();
