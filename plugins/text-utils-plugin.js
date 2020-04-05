const textUtils = require("../text-utils");
export default ({ app }) => {
    app.textUtils = {};
    app.textUtils.slugify = string => {
      return textUtils.slugify(string)
    };
  };
  