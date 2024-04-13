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
</style>
