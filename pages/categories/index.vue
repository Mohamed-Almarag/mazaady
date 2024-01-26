<template>
  <section class="main_categories_wrapper p-5">
    <b-container>
      <h2 class="text-capitalize mb-3 title">{{ $t('categories') }}</h2>
      <ModulesCategoriesMainForm
        :categories="categories"
        @formSubmitted="getUserChoicesData"
      ></ModulesCategoriesMainForm>
      <div class="mt-4 bg-white shadow-sm p-3 rounded" v-if="items.length > 1">
        <h2 class="text-capitalize mb-3 title">{{ $t('Your choices') }}</h2>
        <ModulesCategoriesCategoryTable
          :category="items"
        ></ModulesCategoriesCategoryTable>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      items: [],
    }
  },
  // Handler get all categories
  async asyncData(context) {
    const categories = await context.$axios.$get('get_all_cats')
    return { categories: categories.data.categories }
  },
  methods: {
    getUserChoicesData(Choices) {
      this.items = Choices
      console.log(Choices)
    },
  },
}
</script>

<style lang="scss" scoped>
.main_categories_wrapper {
  .title {
    @include customFontProperties(27, 700);
    color: $main-color;
  }
}
</style>
