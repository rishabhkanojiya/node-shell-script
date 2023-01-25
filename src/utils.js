const util = require("util");
const config = require("./config");
// const exec = util.promisify(require("child_process").exec);
const execSync = require("child_process").execSync;

const runShCommand = async (cmd, dir, test) => {
  if (test) {
    console.log(cmd);
    return;
  }
  try {
    const { stdout, stderr } = execSync(cmd, { cwd: dir });
    if (stdout) {
      console.log("stdout:", stdout);
    }
    if (stderr) {
      console.log("stderr:", stderr);
    }
  } catch (e) {
    console.error(e);
  }
};

const commandExec = async (dir = "", cmdList, folder = [], test = false) => {
  for (let i = 0; i < cmdList.length; i++) {
    const cmd = cmdList[i];
    let iter;
    let { type } = cmd;

    switch (type) {
      case config.enumType.loop:
        cmd.on.forEach(async (cm) => {
          await runShCommand(cmd.code.replace("{{value}}", cm), dir, test);
        });
        break;

      case config.enumType.intLoop:
        iter = cmd?.dir?.length ? cmd.dir : folder;
        iter.forEach((d) => {
          cmd.on.forEach(async (cm) => {
            await runShCommand(
              cmd.code.replace("{{value}}", cm),
              `${dir}/${d}`,
              test
            );
          });
        });

        break;

      case config.enumType.dir:
        iter = cmd?.dir?.length ? cmd.dir : folder;
        iter.forEach(async (d) => {
          await runShCommand(cmd.code, d, test);
        });

        break;

      default:
        break;
    }
  }
};

module.exports = { runShCommand, commandExec };

// const runShCommandBak = (cmd, dir, test) => {
//     return new Promise((resolve, reject) => {
//       exec(cmd, { cwd: dir }, (error, stdout) => {
//         if (error) {
//           reject(error);
//           return;
//         }
//         resolve(stdout);
//       });
//     });
//   };

// const runShCommand = async (cmd, dir, test) => {
//   if (test) {
//     console.log(cmd);
//     return;
//   }
//   try {
//     const { stdout, stderr } = exec(cmd, { cwd: dir });
//     if (stdout) {
//       console.log("stdout:", stdout);
//     }
//     if (stderr) {
//       console.log("stderr:", stderr);
//     }
//   } catch (e) {
//     console.error(e);
//   }
// };

// const runShCommand = async (cmd, dir, test) => {
// try {
//   console.log(cmd, dir);
//   let res = execSync(cmd, { cwd: dir });
//   console.log("NO ERROR");
//   console.log(res.toString());
// } catch (err) {
//   console.log("output", err);
//   console.log("sdterr", err.stderr.toString());
// }
// };
