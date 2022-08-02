<script setup lang="ts" name="">
const color = useColorMode();
const toggleDark = () => {
  color.preference = color.value === "dark" ? "light" : "dark";
};
</script>
<template>
  <button @click="toggleDark">
    <i
      inline-block
      i-fluent-weather-sunny-16-filled
      dark="i-fluent-weather-moon-16-filled"
    ></i>
  </button>
</template>
<style scoped lang="less"></style>
