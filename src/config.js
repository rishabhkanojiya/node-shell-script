const config = {};

config.enumType = {
  loop: 1,
  intLoop: 2,
  dir: 3,
};

config.mainCheckout = [
  {
    type: config.enumType.dir,
    code: "git checkout main",
  },
  {
    type: config.enumType.dir,
    code: "git checkout master",
  },
  {
    type: config.enumType.dir,
    code: "git pull",
  },
];

module.exports = config;
