<script lang="ts" setup>
const myStore = useMyStore()

definePageMeta({
  layout: 'server',
})

const { value } = storeToRefs(myStore)

myStore.increment()
console.log(value.value)
</script>

<template>
  <v-container>
    <v-btn color="primary">Vuetify Button</v-btn>
  </v-container>
</template>

<style lang="scss" scoped></style>
