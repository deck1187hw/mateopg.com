<template>
  <div class="main-container">
    <section class="height-100 bg--dark text-center">
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-md-12">
            <h1 v-if="error.statusCode === 404">{{$t('404error')}}</h1>
            <h1 v-else>{{$t('error1')}}</h1>
            <p class="lead">
              <a href="/">{{$t('pag_principal')}}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog" // you can set a custom layout for the error page
};
</script>