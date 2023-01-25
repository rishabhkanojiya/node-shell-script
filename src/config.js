const testCmd = "ls -la";

const enumType = {
  loop: 1,
  intLoop: 2,
};

const locationFolder = "";
const makeDirList = [
  {
    type: enumType.loop,
    code: "mkdir {{value}}",
    on: ["prj1", "prj2", "prj3"],
  },
  {
    type: enumType.intLoop,
    code: "touch {{value}}",
    dir: ["prj1", "prj2", "prj3"],
    on: ["file1.js", "file2.js", "file3.js"],
  },
  {
    type: enumType.loop,
    code: "rm -rf {{value}}",
    on: ["prj1", "prj2", "prj3"],
  },
];

module.exports = {
  testCmd,
  enumType,
  locationFolder,
  makeDirList,
};
