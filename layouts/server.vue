<script lang="ts" setup></script>

<template>
  <div class="preload">
    <div class="flex flex-col min-h-screen">
      <!-- <AppHeader /> -->
      <main class="flex-1">
        <slot />
      </main>
      <!-- <AppFooter /> -->
    </div>
    <!-- MODALS and CLIENT CONTENT -->
    <client-only></client-only>
  </div>
</template>

<style lang="scss" scoped></style>
