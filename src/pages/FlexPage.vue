<template>
  <q-page>

    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>

    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col-6 bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="col-4 bg-primary"></div>
      <div class="col-4 bg-secondary"></div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="col-4 bg-primary"></div>
      <div class="col-4 bg-secondary"></div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-between">
      <div class="col-12 col-sm-5 col-md-4 bg-primary"></div>
      <div class="col-12 col-sm-5 col-md-4 bg-secondary"></div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="row q-mb-md justify-around">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column q-mb-md items-center bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column q-mb-md items-end bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-height q-mb-md items-center justify-center bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-height q-mb-md items-center justify-between bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

  </q-page>
</template>

<script setup>
defineOptions({
  name: 'TypographyPage'
});
</script>

<style scoped>
.col,
.col-4,
.col-6,
.col-12 {
  height: 50px
}

.square-box {
  width: 50px;
  height: 50px;
}

.custom-height {
  height: 300px;
}
</style>
