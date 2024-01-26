<template>
  <div class="container">
    <label>Main Category:</label>
    <SearchableDropdown
      :options="categories"
      v-model="selectedMainCategory"
      @change="loadSubcategories"
    />

    <label>Subcategory:</label>
    <SearchableDropdown
      :options="subcategories"
      v-model="selectedSubcategory"
      @change="loadProperties"
    />

    <label>Properties:</label>
    <div v-if="properties.length > 0">
      <SearchableDropdown
        :options="properties"
        v-model="selectedProperty"
        @change="handlePropertyChange"
      />
    </div>

    <div v-if="showInput">
      <label>Other Value:</label>
      <input v-model="otherValue" />
    </div>

    <button @click="submitForm">Submit</button>

    <Table :data="selectedValues" />

    <div class="mt-5 mb-5">
      <client-only>
        <Multiselect
          v-model="value"
          :options="categories"
          placeholder="choose category"
          track-by="name"
          label="name"
        ></Multiselect>
      </client-only>
    </div>
  </div>
</template>

<script>
import SearchableDropdown from './SearchableDropdown.vue'
import Table from './Table.vue'
// import api from '@/services/api' // Assuming you have a service for API calls

export default {
  data() {
    return {
      mainCategories: [],
      subcategories: [],
      properties: [],
      selectedMainCategory: null,
      selectedSubcategory: null,
      selectedProperty: null,
      otherValue: '',
      showInput: false,
      selectedValues: [],
      value: '',
    }
  },
  async asyncData(context) {
    const categories = await context.$axios.$get('get_all_cats')
    return { categories: categories.data.categories }
  },
  methods: {
    // Make API call to get subcategories based on selectedMainCategory
    async loadSubcategories(selectedOption) {
      // this.subcategories = await api.getSubcategories(this.selectedMainCategory)
      console.log(selectedOption)
      // await this.$axios.$get(`properties?cat=${selectedOption}`).then((res) => {
      await this.$axios.$get(`properties?cat=13`).then((res) => {
        this.subcategories = res.data
      })
    },
    // Make API call to get properties based on selectedSubcategory
    async loadProperties() {
      console.log('test')
      await this.$axios.$get(`get-options-child/53`).then((res) => {
        this.properties = res.data
        console.log(this.properties)
      })
      // this.properties = await api.getProperties(this.selectedSubcategory)
    },
    // Make API call to get child properties based on selectedProperty
    async handlePropertyChange() {
      console.log('test')
      // const childProperties = await api.getChildProperties(
      //   this.selectedProperty
      // )
      // Do something with childProperties if needed
    },
    submitForm() {
      // Handle form submission, show selected values in the table
      this.selectedValues.push({
        key: 'Selected Property',
        value: this.selectedProperty,
      })
      if (this.showInput) {
        this.selectedValues.push({ key: 'Other Value', value: this.otherValue })
      }
    },
  },
  components: {
    SearchableDropdown,
    Table,
  },
}
</script>
