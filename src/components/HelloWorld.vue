<script setup lang="ts">
// import { ref } from 'vue';
import Test from './Test.vue'
</script>

<template>
  <css-doodle id="doodle" grid="5">
    <Test />
  </css-doodle>
</template>

<style scoped>
#doodle {
  background: var(--color-near-black);
}
</style>
