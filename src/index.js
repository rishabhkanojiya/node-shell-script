const { testCmd, makeDirList } = require("./config");
const { runShCommand, commandExec } = require("./utils");

let dir = "/Users/rishabhkanojiya/Desktop/Utils/nodeSh";

commandExec("", makeDirList);
// runShCommand(testCmd);
