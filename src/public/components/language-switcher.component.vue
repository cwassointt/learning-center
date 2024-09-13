<script>

export default {
  name: "language-switcher",
  components: {PvSelectButtom},
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }
}
</script>

<template>
  <pv-select-buttom v-model ="$i18n.locale" :options="languages">
    <template #option="slotProps">
      {{ slotProps.option.toUpperCase() }}
    </template>
  </pv-select-buttom>
</template>

<style scoped>

</style>