<template>
  <div class="nav-container">
    <div>
      <div class="bar bar--sm visible-xs">
        <div class="container">
          <div class="row">
            <div class="col-3 col-md-2">
              <Logo />
            </div>
            <div class="col-9 col-md-10 text-right">
              <a
                href="#"
                class="hamburger-toggle"
                data-toggle-class="#menu2;hidden-xs hidden-sm"
              >
                <i class="icon icon--sm stack-interface stack-menu"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav id="menu2" class="bar bar-2 hidden-xs">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 text-center text-left-sm hidden-xs order-lg-2">
              <div class="bar__module">
                <nuxt-link :to="$i18n.path('')"> <Logo /> </nuxt-link>
              </div>
            </div>
            <div class="col-lg-5 order-lg-1">
              <div class="bar__module">
                <ul class="menu-horizontal text-left">
                  <li>
                    <nuxt-link :to="$i18n.path('')">
                      {{ $t('inicio') }}
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link :to="$i18n.path('blog')">
                      {{ $t('blog') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="$i18n.path('about-me')">
                      {{ $t('about_me') }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-5 text-right text-left-xs text-left-sm order-lg-3"
            >
              <div class="bar__module">
                <div class="langs text-center text-sm-right">
                  <a
                    v-for="(item, index) in $store.state.languages"
                    :key="index"
                    :href="`/${localeShort(item.id)}`"
                    class="flag-cont"
                    v-bind:class="{
                      active: $store.state.language.lang === item.id
                    }"
                  >
                    <img
                      class="flag1"
                      :alt="`${item.name}`"
                      :src="`/img/${item.id}.png`"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: function() {
    return {
      document: null,
      documentId: null
    }
  },
  methods: {
    localeShort(loc) {
      return loc.substring(0, 2)
    }
  },
  created() {
    //this.$i18n.locale = this.localeShort(this.$store.state.language.lang);
  },
  computed: {
    configuration() {
      return this.$store.getters.configuration
    },
    phone() {
      return 'tel:+34' + this.configuration.telefono
    },
    async fetch({ app, context, error, req, params, query, store }) {
      try {
        const api = await app.$Prismic.getApi(app.$PrismicConfig.apiEndpoint, {
          req
        })

        let languages = api.data.languages
      } catch (e) {
        error({ statusCode: 404, message: e })
      }
    }
  }
}
</script>
<style scoped>
.bar .logo {
  width: 100%;
}
.menu-horizontal {
  margin-bottom: 15px;
}
@media (max-width: 550) {
  .link1a {
    padding: 6px;
    display: block;
  }
  .topl1 {
    font-weight: bold !important;
  }
}
.link1a {
  font-weight: 600;
}
.topl1 {
  font-weight: bold !important;
  font-size: 1.4em;
  color: #111;
}
.flag1 {
  height: 18px;
  padding: 3px;
}
.flag-cont {
  cursor: pointer;
}
.flag-cont.active {
  border-bottom: 3px solid #1eb6ad;
}
.langs {
  margin-right: 12px;
}
</style>
