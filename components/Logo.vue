<template>
  <img src="logo.png" class="mateoPg"/>
</template>
<style>
.mateoPg {
  animation: 1s appear;
  margin: auto;
  width: 100px;
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
