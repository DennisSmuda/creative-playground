<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, toRefs, watch } from 'vue'
import p5 from 'p5'

// Define props directly using `defineProps`
const props = defineProps({
  src: {
    type: String,
    required: true, // The path to the p5 sketch file is required
  },
  width: {
    type: Number,
    required: true, // Width for the canvas
  },
  height: {
    type: Number,
    required: true, // Height for the canvas
  },
})

const { width, height } = toRefs(props) // Destructure props to access width and height
const canvasContainer = ref<HTMLElement | null>(null) // Reference to the container where the canvas will be rendered
let myp5: p5 | null = null // Variable to store the p5 instance

// Function to dynamically import the sketch file
const loadSketch = async () => {
  try {
    const module = await import(/* @vite-ignore */ props.src) // Dynamically import the sketch
    const sketch = module.default // Default export is the sketch function

    if (typeof sketch === 'function' && canvasContainer.value) {
      myp5 = new p5((p: p5) => sketch(p, props.width, props.height), canvasContainer.value) // Create p5 instance with the sketch
    } else {
      console.error('No valid sketch function found in the imported module.')
    }
  } catch (error) {
    console.error(`Failed to load sketch module: ${props.src}`, error)
  }
}

// Resize the canvas whenever the props change
watch([width, height], () => {
  if (myp5) {
    myp5.resizeCanvas(width.value, height.value) // Resize the canvas based on new width and height props
  }
})

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
  {{ width }} {{ height }}
  <div ref="canvasContainer" class="container" :style="{ width: width + 'px', height: height + 'px' }"></div>
  <!-- This is where the p5 sketch will be rendered -->
</template>

<style scoped>
</style>