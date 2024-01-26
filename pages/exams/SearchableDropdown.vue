<template>
  <select v-model="selectedOption" @change="handleChange">
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      selectedOption: this.value,
    }
  },
  methods: {
    handleChange() {
      console.log('selectedOption from searchable', this.selectedOption)
      this.$emit('change', this.selectedOption)
    },
  },
}
</script>
