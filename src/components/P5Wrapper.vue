<script setup lang="ts">
import p5 from 'p5'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  sketch: {
    type: Function,
    required: true,
  },
})

let myp5: p5 | null = null
const canvasContainer = ref<HTMLElement | null>(null)
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

onMounted(() => {
  if (typeof props.sketch === 'function' && canvasContainer.value) {
    // eslint-disable-next-line new-cap
    myp5 = new p5((p: p5) => props.sketch(p, containerWidth.value, containerHeight.value), canvasContainer.value)
  }
})

onBeforeUnmount(() => {
  if (myp5) {
    myp5.remove() // Clean up the p5 instance when the component is destroyed
    myp5 = null // Reset the instance
  }
})
</script>

<template>
  <div ref="p5ComponentContainer" class="p5-component-container">
    <div
      ref="canvasContainer"
      class="container"
      :style="{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
      }"
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
  overflow: hidden;
}
</style>
