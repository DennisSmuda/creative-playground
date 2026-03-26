<script setup lang="ts">
import P5Wrapper from '../components/P5Wrapper.vue'
import mouseMover from '../sketches/MouseMover.ts'
</script>

<template>
  <P5Wrapper :sketch="mouseMover" />
</template>
