<template>
  <div class="main-container">
    <section
      class="cover imagebg text-center height-80 section--ken-burns"
      data-overlay="4"
    >
      <div class="background-image-holder">
        <img
          v-if="document.top_image.url"
          :alt="Dom.RichText.asText(document.main_title)"
          :src="document.top_image.url"
        />
      </div>

      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-md-9 col-lg-8">
            <h1>{{ Dom.RichText.asText(document.main_title) }}</h1>
            <p class="lead">
              {{ Dom.RichText.asText(document.main_description) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="space--sm switchable switchable--switch"
      v-for="(section, ind) in document.subsections"
      :key="ind"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="height-50 imagebg border--round" data-overlay="2">
              <div class="background-image-holder">
                <img
                  v-if="section.image.url"
                  :alt="section.image.alt"
                  :src="section.image.url"
                />
              </div>
              <div
                class="pos-vertical-center col-md-6 boxed boxed--lg bg--none"
              >
                <h2>{{ Dom.RichText.asText(section.section_name) }}</h2>
                <p class="lead">{{ Dom.RichText.asText(section.text) }}</p>
                <p>
                  <nuxt-link class="btn btn--large" :to="$i18n.path(section.link)">
                    <span class="btn__text">{{ $t('view_more') }}</span>
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  created() {
    this.$loadJSFiles()
  },
  async asyncData({ app, context, error, req, params, query, store }) {
    try {
      const api = await app.$Prismic.getApi(app.$PrismicConfig.apiEndpoint, {
        req
      })
      let document = {}
      const result = await api.getSingle('main_homepage', store.state.language)
    
      return {
        document: result.data,
        documentId: result.id
      }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: e })
    }
  }
}
</script>

<style></style>
