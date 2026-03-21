<script setup lang="ts">
import P5Wrapper from '../components/P5Wrapper.vue'
import wavingCircles from '../sketches/WavingCircles'
</script>

<template>
  <P5Wrapper :sketch="wavingCircles" />
</template>
