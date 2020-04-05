const PrismicConfig = require("../prismic.config");
const textUtils = require("../text-utils");

import Prismic from "prismic-javascript";

const langs = ["es", "en", "pt"];
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
    "/actividad-cientifica",
    "/actualidad/entrevistas-murillo",
    "/actualidad/galerias-de-fotos",
    "/hable-con-nosotros",
    "/hable-con-nosotros/gracias",
    "/la-clinica/casos-clinicos",
    "/la-clinica/clinicas",
    "/la-clinica/dr-diego-murillo-solis",
    "/la-clinica/equipo",
    "/la-clinica/la-clinica-murillo",
    "/la-clinica/seguros",
    "/la-clinica/tratamientos",
    "/privacidad"
  ], true);

  const api = await Prismic.getApi(PrismicConfig.apiEndpoint);

  const tratamientos = api
    .query(Prismic.Predicates.at("document.type", "tratamientos"))
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/la-clinica/tratamientos/${payload.uid}`
        };
      });
    });


    const sub_tratamientos = api
    .query( Prismic.Predicates.at("document.type", "tratamientos"))
    .then(response => {
      let subts = []
      response.results.map(payload => {
        payload.data.tratamientos.forEach(element => {
          subts.push({
            route: `/la-clinica/tratamientos/${payload.uid}/${textUtils.slugify(element.titulo_tratamiento1)}`
          })
        });
      });
      return subts
    });



  const actualidad = api
    .query(Prismic.Predicates.at("document.type", "actualidad"),{  pageSize: 100 })
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/actualidad/entrevistas-murillo/${payload.uid}`,
          payload
        };
      });
    });

  const casos_clinicos = api
    .query(Prismic.Predicates.at("document.type", "casos_clinicos"), {
      pageSize: 100
    })
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/la-clinica/casos-clinicos/${payload.uid}`
        };
      });
    });

  const seccion_interna = api
    .query(Prismic.Predicates.at("document.type", "seccion_interna"), {
      pageSize: 100
    })
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/clinica/${payload.uid}`
        };
      });
    });

  const clinicas = api
    .query(Prismic.Predicates.at("document.type", "clinicas"), {
      pageSize: 100
    })
    .then(response => {
      return response.results.map(payload => {
        return {
          route: `/la-clinica/clinicas/${payload.uid}`
        };
      });
    });

  return Promise.all([
    tratamientos,
    clinicas,
    casos_clinicos,
    seccion_interna,
    actualidad,
    sub_tratamientos
  ]).then(values => {
    let tratamientos = addLangs(values[0]);
    let clinicas = addLangs(values[1]);
    let casos_clinicos = addLangs(values[2]);
    let seccion_interna = addLangs(values[3]);
    let actualidad = addLangs(values[4]);
    let sub_tratamientos = addLangs(values[5]);
    return [
      ...tratamientos,
      ...clinicas,
      ...casos_clinicos,
      ...seccion_interna,
      ...actualidad,
      ...sub_tratamientos,
      ...nonDynPages
    ];
  });
};
