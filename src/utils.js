const { exec } = require("child_process");
const { enumType } = require("./config");

const runShCommand = (cmd, dir, test = false) => {
  if (test) {
    console.log(cmd);
    return;
  }

  exec(cmd, { cwd: dir }, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const commandExec = (dir = "", cmdList) => {
  for (let i = 0; i < cmdList.length; i++) {
    const cmd = cmdList[i];

    let { type } = cmd;

    switch (type) {
      case enumType.loop:
        cmd.on.forEach((cm) => {
          runShCommand(cmd.code.replace("{{value}}", cm), dir, false);
        });
        break;

      case enumType.intLoop:
        cmd.dir.forEach((d) => {
          cmd.on.forEach((cm) => {
            runShCommand(cmd.code.replace("{{value}}", cm), d, false);
          });
        });

        break;

      default:
        break;
    }
  }
};

module.exports = { runShCommand, commandExec };
