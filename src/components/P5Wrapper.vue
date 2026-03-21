<script setup lang="ts">
import p5 from 'p5'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true, // The path to the p5 sketch file is required
  },
})

let myp5: p5 | null = null // Variable to store the p5 instance
const canvasContainer = ref<HTMLElement | null>(null) // Reference to the container where the canvas will be rendered
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

// Function to dynamically import the sketch file
async function loadSketch() {
  try {
    const module = await import(/* @vite-ignore */ props.src) // Dynamically import the sketch
    const sketch = module.default // Default export is the sketch function

    if (typeof sketch === 'function' && canvasContainer.value) {
      // eslint-disable-next-line new-cap
      myp5 = new p5((p: p5) => sketch(p, containerWidth.value, containerHeight.value), canvasContainer.value) // Create p5 instance with the sketch
    }
    else {
      console.error('No valid sketch function found in the imported module.')
    }
  }
  catch (error) {
    console.error(`Failed to load sketch module: ${props.src}`, error)
  }
}

onMounted(() => {
  loadSketch() // Load the sketch when the component is mounted
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
