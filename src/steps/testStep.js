const config = {};

config.defaultCommand = [
  {
    type: config.enumType.dir,
    code: "exec zsh",
  },
];

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
  ...config.makeDir,
  {
    type: config.enumType.dir,
    code: "git init",
  },
  ...config.gitAddCommit("initial commit"),
];

config.gitStepsMain = [
  {
    type: config.enumType.dir,
    code: "git checkout -b test1",
  },
  {
    type: config.enumType.intLoop,
    code: "touch {{value}}",
    dir: ["prj1", "prj2", "prj3"],
    on: ["file4.js"],
  },
  ...config.gitAddCommit("minor changes file4"),
  {
    type: config.enumType.dir,
    code: "git checkout main",
  },
  {
    type: config.enumType.dir,
    code: "git checkout -b test2",
  },
  {
    type: config.enumType.intLoop,
    code: "touch {{value}}",
    dir: ["prj1", "prj2", "prj3"],
    on: ["file5.js"],
  },
  ...config.gitAddCommit("added file 5"),
];
