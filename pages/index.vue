<template>
  <div class="main-container">
    <section class="cover imagebg text-center height-90 section--ken-burns" data-overlay="4">
      <div class="background-image-holder">
        <img
          alt="background"
          src="https://images.prismic.io/mateopg/57e82bdd-d0e1-4770-aa2c-9597159dc6e7_joao-silas-I_LgQ8JZFGE-unsplash.jpg?auto=compress,format"
        />
      </div>
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-md-9 col-lg-8">
            <h1>Streamline your workflow with Stack</h1>
            <p
              class="lead"
            >Stack offers a clean and contemporary look to suit a range of purposes from corporate, tech startup, marketing site to digital storefront.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="space--sm switchable switchable--switch">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="height-50 imagebg border--round" data-overlay="2">
              <div class="background-image-holder">
                <img
                  alt="background"
                  src="https://images.prismic.io/mateopg/23f17471-ca9f-4e13-8ed7-3e48b1afcbf4_jon-tyson-UkoWSqwxPSg-unsplash.jpg?auto=compress,format"
                />
              </div>
              <div class="pos-vertical-center col-md-6 boxed boxed--lg bg--none">
                <h2>Buildings</h2>
                <p class="lead">Most famous buildings in history.</p>
                <p>
                  <nuxt-link class="btn btn--large" to="blog/history">
                    <span class="btn__text">View more</span>
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space--xss switchable switchable--switch">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="height-50 imagebg border--round" data-overlay="2">
              <div class="background-image-holder">
                <img
                  alt="background"
                  src="https://images.prismic.io/mateopg/0e2d20a9-6915-456b-83f3-e51f97466294_scott-rodgerson-6tiytXTQ3Yg-unsplash.jpg?auto=compress,format"
                />
              </div>
              <div class="pos-vertical-center col-md-6 boxed boxed--lg bg--none">
                <h2>Wars</h2>
                <p class="lead">Most famous conflicts</p>
                <p>
                  <nuxt-link class="btn btn--large" to="blog/history">
                    <span class="btn__text">View more</span>
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="space--xss switchable switchable--switch">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="height-50 imagebg border--round" data-overlay="2">
              <div class="background-image-holder">
                <img
                  alt="background"
                  src="https://images.prismic.io/mateopg/6fbdd6ff-4d66-4876-a6e2-9f9973152579_british-library-r3SR0Y-tnKs-unsplash.jpg?auto=compress,format"
                />
              </div>
              <div class="pos-vertical-center col-md-6 boxed boxed--lg bg--none">
                <h2>Historical Figures</h2>
                <p class="lead">Most famous conflicts</p>
                <p>
                  <nuxt-link class="btn btn--large" to="blog/history">
                    <span class="btn__text">View more</span>
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
  }
}
</script>

<style>
</style>
