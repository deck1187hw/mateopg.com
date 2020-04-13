const PrismicConfig = require("../prismic.config");
const textUtils = require("../text-utils");

import Prismic from "prismic-javascript";

const langs = ["es", "en"];
function addLangs(items, root = false) {
  let allL = [];
  items.forEach(function callback(currentValue) {
    let val = "";
    if (!root) {
      val = currentValue.route;
    } else {
      val = currentValue;
    }

    allL.push({ route: `${val}` });
    for (let i = 0; i < langs.length; i++) {
      allL.push({ route: `/${langs[i]}${val}` });
    }
  });
  return allL;
}

module.exports = async function getAppRoutes() {

  //Get non-dynamic pages
  let nonDynPages = addLangs([
    "/",
    "/about-me",
    "/privacy-policy"
  ], true);

  const api = await Prismic.getApi(PrismicConfig.apiEndpoint);



  const blog = api
    .query(Prismic.Predicates.at("document.type", "blog_post"),{  pageSize: 200 })
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/blog/${payload.uid}`,
          payload
        };
      });
    });


  return Promise.all([
    blog
  ]).then(values => {
    let blog = addLangs(values[0]);
    return [
      ...blog,
      ...nonDynPages
    ];
  });
};
