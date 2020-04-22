const PrismicConfig = require("../prismic.config");


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
    "/blog",
    "/privacy-policy"
  ], true);

  const api = await Prismic.getApi(PrismicConfig.apiEndpoint);



  const blog_es = api
    .query(Prismic.Predicates.at("document.type", "blog_post"),{  lang: 'es-es' })
    .then(response => {
      console.log('response: ',response)
      return response.results.map(payload => {
        return {
          route: `/es/blog/${payload.uid}`,
          payload
        };
      });
    });
 

    const blog_en = api
    .query(Prismic.Predicates.at("document.type", "blog_post"),{  lang: 'en-gb' })
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/blog/${payload.uid}`,
          payload
        };
      });
    });



  return Promise.all([
    blog_es,
    blog_en
  ]).then(values => {
    let blog_es = values[0];
    let blog_en = values[1];
    return [
      ...blog_es,
      ...blog_en,
      ...nonDynPages
    ];
  });
};
