<template>
  <section class="welcome_page_wrapper pt-5">
    <b-container>
      <div class="d-flex">
        <SharedAppButton :isLink="true" :toRoute="localePath(`/categories`)">
          <template #link>
            <span>categories</span>
          </template>
        </SharedAppButton>
        <SharedAppButton :isLink="true" :toRoute="localePath(`/profile`)">
          <template #link>
            <span>profile</span>
          </template>
        </SharedAppButton>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.main_home_page_wrapper {
  .multiselect {
    max-width: 100%;
    .multiselect__tags {
      background-color: transparent;
      max-width: 100%;
      border: none;
    }
    .multiselect__input,
    .multiselect__single {
      background-color: transparent;
    }
  }
}
</style>
