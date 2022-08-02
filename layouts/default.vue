<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-3">
    <NaiveProvider>
      <Header />
      <slot />
      <Footer />
    </NaiveProvider>
  </div>
</template>
