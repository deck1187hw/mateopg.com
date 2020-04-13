<template>
  <div class="main-container">
    <section class="height-100 bg--dark text-center">
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-md-12">
            <h1 v-if="error.statusCode === 404">Error página no encontrada</h1>
            <h1 v-else>Error en la página</h1>
            <p class="lead">
              <a href="/">Volver a la página principal</a>
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