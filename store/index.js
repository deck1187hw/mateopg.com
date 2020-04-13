import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export const state = () => ({
  configuration: {},
  language: { lang: 'es-es' },
  language: [],
  locale: 'es',
  locales: ['es', 'en'],
});

export const getters = {
  configuration: state => {
    return state.configuration
  },
  language: state => {
    return state.language
  },
  languages: state => {
    return state.languages
  }
};

export const mutations = {
  SET_CONFIGURATION(state, data) {
    state.configuration = data
  },
  SET_LANGUAGE(state, data) {
    state.language = data
  },
  SET_LANGUAGES(state, data) {
    state.languages = data
  },
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { req, query, app }) {


  }
};