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
export default ({ app }, inject) => {
  app.$Prismic = Prismic;
  app.$PrismicConfig = PrismicConfig;
};
