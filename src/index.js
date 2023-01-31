// const { freePropSteps, vulStep } = require("./steps/freeProp");
const { mergeStep } = require("./steps/gitSteps");
const { temp } = require("./steps/temp");
const { commandExec } = require("./utils/execUtils");

const main = () => {
  let dir = "/Users/rishabhkanojiya/Desktop/Projects/PixelBin/FrontEnd";
  // let dir = "/Users/rishabhkanojiya/Desktop/Utils/nodeSh/testFolder";

  commandExec(
    dir,
    mergeStep,
    ["sai", "suigetsu", "sakura", "sarada", "mitsuki", "satetsu"],
    true
  );
};

main();
