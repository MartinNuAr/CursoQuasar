<template>
  <q-page class="flex column q-pa-md">

    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 5</span>

    <q-separator />

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-separator />

    <p class="text-body1">sadadasdasasdasdasds</p>
    <p class="text-body2">asdasdasdasasdasdasd</p>

    <q-btn @click="toggleLeftDrawer" color="primary" label="Abrir menú lateral" class="q-mt-md"></q-btn>

  </q-page>
</template>

<script setup>
import useUI from 'src/composables/useUI'

const { toggleLeftDrawer } = useUI()

defineOptions({
  name: 'TypographyPage'
});
</script>
