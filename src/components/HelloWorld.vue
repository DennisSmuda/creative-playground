<script setup lang="ts">
// import { ref } from 'vue';
import Test from './Test.vue';
</script>

<template>
  <css-doodle grid="5" id="doodle">

    <Test />
  </css-doodle>
</template>

<style scoped>
#doodle {
  background: var(--color-near-black);
}
</style>