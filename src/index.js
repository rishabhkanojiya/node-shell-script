const config = require("./config");
const { runShCommand, commandExec } = require("./utils");

let dir = "/Users/rishabhkanojiya/Desktop/Utils/nodeSh";

const main = () => {
  //   commandExec(dir, config.makeDir, false);
  //   commandExec(dir,, config.gitSteps, ["prj1", "prj2", "prj3"], false);
  commandExec(dir, config.rmDir);
};

main();
