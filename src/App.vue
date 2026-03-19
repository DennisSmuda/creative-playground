<template>
  <nav>
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/testp5">
      Test P5
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
