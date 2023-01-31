const _ = require("lodash");

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

module.exports = { generateMRUrl };
