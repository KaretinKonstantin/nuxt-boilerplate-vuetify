<script lang="ts" setup></script>

<template>
  <client-only>
    <div class="preload">
      <div class="flex flex-col min-h-screen">
        <!-- <AppHeader /> -->
        <main class="flex-1">
          <slot />
        </main>
        <!-- <AppFooter /> -->
      </div>
      <!-- MODALS and CLIENT CONTENT -->
    </div>
  </client-only>
</template>

<style lang="scss" scoped></style>
