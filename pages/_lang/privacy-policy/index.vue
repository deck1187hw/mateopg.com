<template>
  <div class="main-container">
    <section class="switchable">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12">
            <h2>{{ $t("privacy") }}</h2>
            <div
              v-html="
                Dom.RichText.asHtml(
                  $store.state.configuration.privacy_policy
                )
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

<style></style>
