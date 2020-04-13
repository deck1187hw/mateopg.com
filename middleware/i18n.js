import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default async function ({ isHMR, app, store, route, params, error, redirect, req }) {
    
    
    const defaultLocale = app.i18n.fallbackLocale
    // If middleware is called from hot module replacement, ignore it
    if (isHMR) { return }
    // Get locale from params
    const locale = params.lang || defaultLocale
    if (!store.state.locales.includes(locale)) {
      return error({ message: 'This page could not be found.', statusCode: 404 })
    }
    // Set locale
    store.commit('SET_LANG', locale)
    app.i18n.locale = store.state.locale



    //Load default configuration based on the locale
        const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
  
        // All languages to show them
        let languages = api.data.languages
        store.commit("SET_LANGUAGES", languages)
        const prismicLangs = {
            en: 'en-gb',
            es: 'es-es'
        }
  
        let lang = { lang: prismicLangs[locale] }
        store.commit("SET_LANGUAGE", lang)
  
        let configuration = {};
        const result = await api.getSingle("configuration", lang);
      
        configuration = result.data;
       
        store.commit("SET_CONFIGURATION", configuration);


    // If route is /<defaultLocale>/... -> redirect to /...
    if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
      const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
      const re = new RegExp(toReplace)
      return redirect(
        route.fullPath.replace(re, '/')
      )
    }
  }
