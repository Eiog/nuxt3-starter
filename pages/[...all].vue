<script setup lang="ts"></script>

<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <div class="prose-sm m-auto text-left prose">
          <ContentRenderer :value="doc" />
        </div>
      </template>
      <template #not-found>
        <h1>Page Not Found</h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style scoped lang="less"></style>
