<template>
  <main>
    <SharedAppNavbar></SharedAppNavbar>
    <nuxt></nuxt>
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head() {
    return {
      htmlAttrs: {
        dir: this.$i18n.locale == 'en' ? 'ltr' : 'rtl',
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
