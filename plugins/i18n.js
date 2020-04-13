//Source https://christopherkade.com/posts/nuxt-i18n
import Vue from "vue";
import VueI18n from "vue-i18n";

// Tell Vue to use our plugin
Vue.use(VueI18n);

export default ({ app, store }) => {
  // Set the i18n instance on app
  // This way we can use it globally in our components through this.$i18n
  app.i18n = new VueI18n({
    // Set the initial locale
    locale: store.state.locale,
    baseUrl: 'https://mateopg.com',
    // Set the fallback locale in case the current locale can't be found
    fallbackLocale: "en",
    seo: false,

    // Associate each locale to a content file    
    messages: {
      en: require("~/static/lang/content-en.json"),
      es: require("~/static/lang/content-es.json"),
      pt: require("~/static/lang/content-pt.json")
    }
  });

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
};