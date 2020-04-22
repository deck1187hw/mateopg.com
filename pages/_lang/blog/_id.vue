<template>
  <div>
    <section class="text-center imagebg" data-overlay="4" v-if="document">
      <div class="background-image-holder">
        <img
          v-if="document.main_image.url"
          :alt="Dom.RichText.asText(document.title)"
          :src="document.main_image.url"
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8">
            <h1>{{ Dom.RichText.asText(document.title) }}</h1>
            <p class="lead">
     
       
              <span>{{ $dateFns.format(document.date, 'dd MMMM yyy') }}</span>
              <br />
               <span class=" badge badge-primary">({{
                      document.category.slug
                    }})</span>
            </p> 
            <p>        <span class="colaborators"
                  >
             {{document.colaboradores_blog.uid}}
               </span></p>
          </div>
        </div>
      </div>
    </section>
    <section class="space--sm" v-if="document">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <nuxt-link class="btn" :to="$i18n.path(`blog`)">
              <span class="btn__text">
                <i class="icon-arrow-left"></i> {{$t('volver')}}</span
              >
            </nuxt-link>
            <br /><br />
            <div class="masonry_2 masonry_2-blog-list">
              <div class="masonry_2__container">
                <article class="masonry_2__item voh vnn">
                  <div class="article__body">
                    <div
                      v-html="Dom.RichText.asHtml(document.description)"
                    ></div>
                  </div>
                </article>
                <hr />
                <div class="comments">
                  <vue-disqus
                    shortname="history-of-places"
                    identifier="history-of-places"
                    url="https://mateopg.com/"
                  ></vue-disqus>
                </div>
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
      document: {
        title: ''
      }
    }
  },


  head() {
    return this.$generateMeta({
      title: this.$has(this, "document.title")
        ? this.Dom.RichText.asText(this.document.title)
        : null,
      description: this.$has(this, "document.introduction")
        ? this.Dom.RichText.asText(this.document.introduction)
        : null,
      image: this.$has(this, "document.main_image.url")
        ? this.document.main_image.url
        : null
    });
  },
  created() {
    this.$loadJSFiles()
  },
  computed: {
    descriptionSEO() {
      return this.Dom.RichText.asText(this.document.introduction)
    }
  },
  async asyncData({ app, context, error, req, params, query, store }) {
    try {
      const api = await app.$Prismic.getApi(app.$PrismicConfig.apiEndpoint, {
        req
      })

      const result = await api.getByUID('blog_post', params.id,{ lang : store.state.language.lang })
      return {
        document: result.data,
        uid: params.id,
        documentId: result.id
      }
    } catch (e) {
      console.log('Error', e)
    }
  }
}
</script>
<style scoped></style>
