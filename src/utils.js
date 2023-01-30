const util = require("util");
const config = require("./config");
// const exec = util.promisify(require("child_process").exec);
const execSync = require("child_process").execSync;
const spawnSync = require("child_process").spawnSync;
const spawn = require("child_process").spawn;
const _ = require("lodash");

const runShCommand = async (cmd, dir, test, detach) => {
  if (test) {
    console.log(dir);
    console.log(cmd);
    return;
  }
  try {
    console.log("---------------------------------------------------------");
    console.log(dir);
    console.log(cmd);

    if (detach) {
      spawn(cmd, {
        cwd: dir,
        stdio: "inherit",
        shell: "/bin/zsh",
        detached: true,
      });
    } else {
      execSync(cmd, {
        cwd: dir,
        stdio: "inherit",
        shell: "/bin/zsh",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

const generateMRUrl = (params) => {
  let generatedUrl = _.reduce(
    params,
    (result, value, key) => {
      return (
        result + `&merge_request${encodeURIComponent(`[${key}]`)}=${value}`
      );
    },
    "https://gitlab.com/fynd/regrowth/pixelbin/ui/{{dir}}/-/merge_requests/new?"
  );

  let url = `open --new -a "Google Chrome" --args "${generatedUrl}"`;
  return url;
};

const commandExec = async (dir = "", cmdList, folder = [], test = false) => {
  // cmdList = [...config.defaultCommand, ...cmdList];
  for (let i = 0; i < cmdList.length; i++) {
    const cmd = cmdList[i];
    let iter;
    let { type, detach } = cmd;

    switch (type) {
      case config.enumType.loop:
        cmd.on.forEach(async (cm) => {
          await runShCommand(
            cmd.code.replace("{{value}}", cm),
            dir,
            test,
            detach
          );
        });
        break;

      case config.enumType.intLoop:
        iter = cmd?.dir?.length ? cmd.dir : folder;
        iter.forEach((d, index) => {
          cmd.on.forEach(async (cm) => {
            await runShCommand(
              cmd.code.replace("{{value}}", cm).replace("{{dir}}", d),
              `${dir}/${d}`,
              test,
              detach
            );
          });
        });

        break;

      case config.enumType.dir:
        iter = cmd?.dir?.length ? cmd.dir : folder;
        iter.forEach(async (d, index) => {
          await runShCommand(
            cmd.code.replace("{{dir}}", d).replace("{{number}}", 4021 + index),
            `${dir}/${d}`,
            test,
            detach
          );
        });

        break;

      default:
        break;
    }
  }
};

module.exports = { runShCommand, commandExec, generateMRUrl };

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
