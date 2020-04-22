import Vue from "vue";
import PrismicDOM from "prismic-dom";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

Vue.prototype.Dom = PrismicDOM;
Vue.prototype.document = null;
Vue.prototype.documentId = null;
Vue.prototype.$loadJSFiles = function() {
  if (process.browser) {
    //Load it only If it hasn´t been declared before
    const scriptExists = document.getElementById("script_js_ui");

    if (!scriptExists) {
      let sc1 = document.createElement("script");
      sc1.setAttribute("src", "/js/scripts.js");
      sc1.setAttribute("id", "script_js_ui");
      document.body.appendChild(sc1);
    } else {
      $(document).ready(window.mr.documentReady);
      $(window).on("load", window.mr.windowLoad);
      $(".dropdown--active").removeClass("dropdown--active");

      window.mr.components.documentReady.push(
        window.mr.toggleClass.documentReady
      );
    }
  }
};
Vue.prototype.$truncate = function(str, no_words) {
  return str.split(" ").splice(0,no_words).join(" ");
};

Vue.prototype.$has = function(obj, key) {
  return key.split(".").every(function(x) {
    if(typeof obj != "object" || obj === null || ! x in obj)
        return false;
    obj = obj[x];
    return true;
});
}
Vue.prototype.$generateMeta = function(params) {


  let formattedTitle = "Clínica Murillo: Cirugía plástica, reparadora y estética"
  let formattedDesc = "Web del Dr. Murilo especialista en Cirugía plástica, reparadora y estética. Cara y cuello, mama, contorno corporal, reparadora, medicina estética"
  let formattedImg = "https://images.prismic.io/plasticamurillo/5e5d287d-3b10-46eb-80c7-84d9bd9e493a_diego_murillo.jpg?auto=compress,format"

  if(params.title) {
    formattedTitle = params.title
  }
  if(params.description) {
    formattedDesc = this.$truncate(params.description,20);
  }
  if(params.image) {
    formattedImg = params.image
  }

  return {
    title: formattedTitle,
    meta: [
      {
        hid: "description",
        name: "description",
        content: formattedDesc,
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: formattedTitle,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: formattedTitle,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: formattedDesc,
      },
      {
        hid: "og:title",
        name: "og:title",
        content: formattedTitle,
      },
      {
        hid: "og:description",
        name: "og:description",
        content: formattedDesc,
      },
      {
        hid: "og:image",
        name: "og:image",
        content: formattedImg,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: `${process.env.liveUrl.replace(/\/$/, "")}${this.$route.path}`,
      }
    ],
  };
};

export default ({ app }, inject) => {
  app.$Prismic = Prismic;
  app.$PrismicConfig = PrismicConfig;
};
