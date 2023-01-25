const config = {};

config.testCmd = "ls -la";

config.enumType = {
  loop: 1,
  intLoop: 2,
  dir: 3,
};

config.makeDir = [
  {
    type: config.enumType.loop,
    code: "mkdir {{value}}",
    on: ["prj1", "prj2", "prj3"],
  },
  {
    type: config.enumType.intLoop,
    code: "touch {{value}}",
    dir: ["prj1", "prj2", "prj3"],
    on: ["file1.js", "file2.js", "file3.js"],
  },
];

config.rmDir = [
  {
    type: config.enumType.loop,
    code: "rm -rf {{value}}",
    on: ["prj1", "prj2", "prj3"],
  },
];

config.gitSteps = [
  //   {
  //     type: config.enumType.dir,
  //     code: "git init",
  //   },
  //   {
  //     type: config.enumType.dir,
  //     code: "git add .",
  //   },
  //   {
  //     type: config.enumType.dir,
  //     code: "git commit -m 'initial commit'",
  //   },
  {
    type: config.enumType.dir,
    code: "git reset HEAD~",
  },
];

module.exports = config;
