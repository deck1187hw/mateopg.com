<template>
  <div>
    <navmenu />
    <nuxt />
    <footera />
  </div>
</template>

<script>
import $ from "jquery";
import navmenu from "~/components/navmenu.vue";
import footera from "~/components/footera.vue";
export default {
  components: {
    navmenu,
    footera
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://mateopg.com' + this.$route.path + '/',
        },
      ],
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },
  computed: {
    configuration() {
      return this.$store.getters.configuration;
    }
  },
  created() {

  },
  mounted() {}
};
</script>
<style>
</style>
