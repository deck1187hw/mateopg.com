<template>
  <footer class="space--xxs footer-2">
   
  </footer>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      mainPropsLogos: {
        blank: true,
        blankColor: "#bbb",
        width: 200
      }
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    configuration() {
      return this.$store.getters.configuration;
    }
  }
};
</script>
<style scoped>
.imgbtn{
  width: 200px
}
</style>