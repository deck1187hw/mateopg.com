<template>
  <footer class="text-center-xs space--xs">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <ul class="list-inline">
            <li>
              <nuxt-link :to="$i18n.path(``)"
                ><span class="h6 type--uppercase">{{ $t('inicio') }}</span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link :to="$i18n.path(`blog`)"
                ><span class="h6 type--uppercase">{{ $t('blog') }}</span></nuxt-link
              >
            </li>

            <li>
                    <nuxt-link :to="$i18n.path('about-me')">
                     <span class="h6 type--uppercase"> {{ $t('about_me') }}</span>
                    </nuxt-link>
                  </li>
          </ul>
        </div>
        <div class="col-sm-5 text-right text-center-xs"></div>
      </div>
      <div class="row">
        <div class="col-sm-7">
          <span class="type--fine-print"
            >© <span class="update-year"></span> History of Places</span
          >
          <nuxt-link
            class="type--fine-print"
            :to="$i18n.path(`privacy-policy`)"
            >{{ $t('privacy') }}</nuxt-link
          >

          
        </div>
        <div class="col-sm-5 text-right text-center-xs">
          <nuxt-link :to="$i18n.path(``)"
                > <img src="/logo_bn.png" class="mateoPg"/>
          </nuxt-link>
          <a class="type--fine-print" :href="`mailto:${$store.state.configuration.contact_email}`">{{$store.state.configuration.contact_email}}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      mainPropsLogos: {
        blank: true,
        blankColor: '#bbb',
        width: 200
      }
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
    configuration() {
      return this.$store.getters.configuration
    }
  }
}
</script>
<style scoped>
.imgbtn {
  width: 200px;
}
.mateoPg{
  opacity: .8;
  width: 40px;
  
}
</style>
