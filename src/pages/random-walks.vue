<script setup lang="ts">
import P5Wrapper from '../components/P5Wrapper.vue'
import randomWalks from '../sketches/RandomWalks'
</script>

<template>
  <P5Wrapper :sketch="randomWalks" />
</template>
