<script setup lang="ts">
import P5Wrapper from '../components/P5Wrapper.vue'
import scalingCircles from '../sketches/ScalingCircles'
</script>

<template>
  <P5Wrapper :sketch="scalingCircles" />
</template>
