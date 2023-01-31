const config = require("../config");
const {
  gitCheckout,
  gitAddCommit,
  gitMergeStep,
  mergeStepFunc,
} = require("../utils/common");

const temp = [
  //   {
  //     type: config.enumType.dir,
  //     code: "git log",
  //   },
  //   ...gitAddCommit("added new file"),
  //   ...gitCheckout("PIXB-test/test", true),
  //   {
  //     type: config.enumType.dir,
  //     code: "touch file5.js",
  //   },
  //   ...config.mainCheckout,
  //   ...mergeStepFunc("PIXB-test/test"),
];

module.exports = { temp };
