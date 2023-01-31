const _ = require("lodash");
const config = require("../config");

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
    {
      type: config.enumType.dir,
      code: `git push`,
    },
  ];
};

const mergeStepFunc = (branch) => {
  return [
    {
      type: config.enumType.dir,
      code: `git merge ${branch}`,
    },
  ];
};

const gitCheckout = (branch, newB = false) => {
  if (branch == "main" || branch == "master") {
    console.log("🚨❌TERMINATED❌ : Was Trying to Switch to 'master' Branch🚨");
    return;
  }

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

/**
 * @param  {} branch : branch name to merge into Main/master
 * @param  {} title : gitlab MR title
 */
const openMr = (branch, title) => {
  return [
    {
      type: config.enumType.dir,
      code: generateMRUrl({
        source_branch: branch,
        title,
        // source_branch: "PIXB-1912/high-vulnerabilities-fix",
        // title: "ID:PIXB-1912;DONE:100;HOURS:1; lint fix;",
        // assignee_id: "12519421",
        // reviewer_id: "12519421",
        // scope: "assigned_to_me",
        // assign: "12519421",
      }),
    },
  ];
};

/**
 * @param  {} msg : commit Message
 * @param  {} srcBranch : the branch to merge
 * @param  {} destBranch :  the branch to merge into (default is 'x0')
 */
const gitMergeStep = (msg, srcBranch, destBranch = "x0") => {
  return [
    ...gitAddCommit(msg),
    ...gitCheckout(destBranch),
    ...mergeStepFunc(srcBranch),
  ];
};

module.exports = {
  generateMRUrl,
  gitAddCommit,
  mergeStepFunc,
  gitCheckout,
  openMr,
  gitMergeStep,
};
