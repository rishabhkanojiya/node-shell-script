const { gitMergeStep } = require("../utils/common");

const mergeStep = [
  ...gitMergeStep(
    "ID:PIXB-TESTID;DONE:100;HOURS:1; test commit;",
    "PIXB-test/test"
  ),
];

module.exports = { mergeStep };
