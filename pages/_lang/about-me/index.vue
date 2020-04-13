<template>
  <div class="main-container">
    <section class="">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <img
              class="foto_me"
              v-if="$store.state.configuration.about_me_image.url"
              :alt="$store.state.configuration.about_me_image.alt"
              :src="$store.state.configuration.about_me_image.url"
            />
            <div class="text-block">
              <h2>Mateo Puig Garcia</h2>
              <span
                v-html="
                  Dom.RichText.asText(
                    $store.state.configuration.texto_debajo_foto
                  )
                "
              ></span>
            </div>

            <ul class="social-list list-inline list--hover">
              <li>
                <a :href="`mailto:${$store.state.configuration.contact_email}`">
                  <i class="socicon socicon-mail icon icon--xs"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mateo.puiggarcia"
                  target="_blank"
                >
                  <i class="socicon socicon-facebook icon icon--xs"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-7">
            <div
              v-html="
                Dom.RichText.asHtml($store.state.configuration.about_me_text)
              "
            ></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    this.$loadJSFiles()
  }
}
</script>

<style scoped>
.foto_me {
  margin-top: 10px;
  padding: 10px;
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
