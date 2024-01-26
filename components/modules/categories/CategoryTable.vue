<template>
  <div class="category_table">
    <b-table
      striped
      :responsive="true"
      :bordered="true"
      :items="category"
    ></b-table>
  </div>
</template>

<script>
export default {
  name: 'CategoryTable',
  props: {
    category: {
      type: Array,
    },
  },
}
</script>

<style lang="scss">
.category_table {
  .table td {
    text-transform: capitalize;
  }
}
</style>
