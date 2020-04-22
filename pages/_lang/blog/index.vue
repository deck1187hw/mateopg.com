<template>
  <div>
    
    <section class="text-center imagebg space--sm" data-overlay="4">
   
      <div class="background-image-holder">
        <img
          :alt="$t('our_blog')"
          src="https://images.prismic.io/mateopg/57e82bdd-d0e1-4770-aa2c-9597159dc6e7_joao-silas-I_LgQ8JZFGE-unsplash.jpg?auto=compress,format"
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8">
            <h1>{{ $t('our_blog') }}</h1>
            <p class="lead">{{ $t('blog_info') }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="space--sm">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="masonry_2 masonry_2-blog-list">
              <div class="masonry_2__container">
                <article
                  class="masonry_2__item voh vnn"
                  v-for="(doc, indx) in blogs"
                  :key="indx"
                >
                  <div class="article__title text-center">
                    <nuxt-link
                      v-if="doc.data.main_image.url"
                      :to="$i18n.path(`blog/${doc.uid}`)"
                    >
                      <h2 v-html="Dom.RichText.asText(doc.data.title)"></h2>
                    </nuxt-link>
                    <span>{{
                      $dateFns.format(doc.data.date, 'dd MMMM yyy')
                    }}</span>
                    <br />
                    <span class="label label-default">{{
                      doc.data.category.slug
                    }}</span>
                  </div>

                  <div class="article__body">
                    <nuxt-link
                      v-if="doc.data.main_image.url"
                      :to="$i18n.path(`blog/${doc.uid}`)"
                    >
                      <img
                        :alt="doc.data.main_image.alt"
                        :src="doc.data.main_image.url"
                      />
                    </nuxt-link>
                    <p v-html="Dom.RichText.asText(doc.data.introduction)"></p>
                    <nuxt-link
                      v-if="doc.data.main_image.url"
                      :to="$i18n.path(`blog/${doc.uid}`)"
                      >{{ $t('continue_reading') }} »
                    </nuxt-link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      blogs: []
    }
  },
  head() {
    return {
      title: this.$t('our_blog'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('blog_info')
        }
      ]
    }
  },
  created() {
    this.$loadJSFiles()
  },

  computed: {
    configuration() {
      return this.$store.getters.configuration
    }
  },
  async asyncData({ app, context, error, req, params, query, store }) {
    try {
      const api = await app.$Prismic.getApi(app.$PrismicConfig.apiEndpoint, {
        req
      })
      const blogs = await api.query(
        app.$Prismic.Predicates.at('document.type', 'blog_post'),
        {
          orderings: '[document.first_publication_date desc]',
          lang: store.state.language.lang
        }
      )

      return {
        blogs: blogs.results
      }
    } catch (e) {
      console.log('Error', e)
    }
  }
}
</script>

<style>
.masonry_2__item{
  margin-top: 50px;
}
</style>
