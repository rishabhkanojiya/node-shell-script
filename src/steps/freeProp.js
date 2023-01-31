const config = require("../config");

const gitAddCommit = (message) => {
  return [
    {
      type: config.enumType.dir,
      code: "git add .",
    },
    {
      type: config.enumType.dir,
      code: `git commit -m '${message}'`,
    },
  ];
};

const gitCheckout = (branch, newB = false) => {
  if (newB) {
    return [
      {
        type: config.enumType.dir,
        code: `git checkout -b  ${branch}`,
      },
      {
        type: config.enumType.dir,
        code: "git pull",
      },
    ];
  }

  return [
    {
      type: config.enumType.dir,
      code: `git checkout ${branch}`,
    },
    {
      type: config.enumType.dir,
      code: "git pull",
    },
  ];
};

const freePropSteps = [
  ...gitCheckout("x0"),
  {
    type: config.enumType.dir,
    code: "git pull",
  },
  //   {
  //     type: config.enumType.dir,
  //     code: "git branch",
  //   },
  //   {
  //     type: config.enumType.dir,
  //     code: "git push",
  //   },
];

const vulStep = [
  // ...gitCheckout("x0"),
  // ...gitCheckout("PIXB-1912/high-vulnerabilities-fix", true),

  // {
  //   type: config.enumType.dir,
  //   code: "./run.docker.sh {{number}}",
  //   detach: true,
  //   delay: true,
  // },

  // {
  //   type: config.enumType.dir,
  //   code: "docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $HOME/Library/Caches:/root/.cache/ aquasec/trivy:0.36.1 image {{dir}}:latest",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "docker stop {{dir}}",
  //   detach: true,
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "npm i",
  // },
  {
    type: config.enumType.dir,
    code: "./run.local.sh",
    detach: true,
  },
  ...config.openMr("branchTest", "titleTest"),

  // {
  //   type: config.enumType.dir,
  //   code: "git pull",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "git commit -am 'ID:PIXB-1912;DONE:100;HOURS:1; lint fix;'",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "git push",
  // },
  // ...gitCheckout("x0"),
  // {
  //   type: config.enumType.dir,
  //   code: "git merge PIXB-1912/high-vulnerabilities-fix",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "tagdeploy erasex0",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "npm i convict",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "    git push --set-upstream origin PIXB-1912/high-vulnerabilities-fix",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "git merge PIXB-1912/high-vulnerabilities-fix",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $HOME/Library/Caches:/root/.cache/ aquasec/trivy:0.36.1 image {{dir}}:latest",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "git stash clear",
  // },
  // {
  //   type: config.enumType.dir,
  //   code: "git stash",
  // },
  // {
  //   type: config.enumType.intLoop,
  //   code: "{{value}}",
  //   on: [
  //     "./run.docker.sh 4021",
  //     "exit",
  //     "docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $HOME/Library/Caches:/root/.cache/ aquasec/trivy:0.36.1 image {{dir}}:latest",
  //     "docker stop {{dir}}",
  //   ],
  // },
];

module.exports = {
  freePropSteps,
  vulStep,
};
