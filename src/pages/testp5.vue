<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import P5Wrapper from '../components/P5Wrapper.vue'

const p5ComponentContainer = ref<HTMLElement | null>(null)
const containerWidth = ref(0)
const containerHeight = ref(0)

onMounted(() => {
  containerWidth.value = p5ComponentContainer.value?.offsetWidth || 0
  containerHeight.value = p5ComponentContainer.value?.offsetHeight || 0
})

// Watch for container size changes and update width/height dynamically
watch(
  [() => p5ComponentContainer.value?.offsetWidth, () => p5ComponentContainer.value?.offsetHeight],
  () => {
    containerWidth.value = p5ComponentContainer.value?.offsetWidth || 0
    containerHeight.value = p5ComponentContainer.value?.offsetHeight || 0
  },
)
</script>

<template>
  <div ref="p5ComponentContainer" class="p5-component-container">
    <P5Wrapper
      src="../sketches/MouseMover.ts"
      :width="containerWidth"
      :height="containerHeight"
    />
  </div>
</template>

<style scoped>
.p5-component-container {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  column-gap: 0;
  border-radius: 16px;
  border-color: aqua;
  border-style: solid;
  border-width: 8px;
  overflow: hidden;
}
</style>
