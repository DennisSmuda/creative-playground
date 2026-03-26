<template>
  <nav>
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/waving-circles">
      Waving Circles
    </RouterLink>
    <RouterLink to="/scaling-circles">
      Scaling Circles
    </RouterLink>
    <RouterLink to="/mouse-balls">
      Mouse Balls
    </RouterLink>
    <RouterLink to="/testdoodle">
      Test Doodle
    </RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 16px;
}
</style>
