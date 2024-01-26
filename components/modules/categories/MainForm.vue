<template>
  <div class="main_form_wrapper bg-white shadow-sm p-3 rounded">
    <client-only>
      <ValidationObserver ref="form">
        <form @submit.prevent="submitForm">
          <b-row>
            <!--  Main Categories -->
            <b-col md="6" class="mb-3">
              <ValidationProvider
                name="main category"
                rules="required"
                v-slot="{ errors }"
                mode="eager"
              >
                <div>
                  <label class="mb-2 w-100 text-capitalize form_label">{{
                    $t('Main Categories')
                  }}</label>
                  <client-only>
                    <Multiselect
                      v-model="selectedMainCategory"
                      :options="categories"
                      :placeholder="$t('Select category')"
                      track-by="name"
                      label="name"
                      :show-labels="false"
                      @select="handlerGetSubCategory"
                    ></Multiselect>
                  </client-only>
                </div>
                <span v-if="errors[0]" class="validation_error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </b-col>
            <!--  Sub category Menu => Children From Main Categories && Empty by default-->
            <b-col md="6" class="mb-3">
              <ValidationProvider
                name="sub category"
                rules="required"
                v-slot="{ errors }"
                mode="eager"
              >
                <div>
                  <label class="mb-2 w-100 text-capitalize form_label">{{
                    $t('sub category')
                  }}</label>
                  <client-only>
                    <Multiselect
                      v-model="selectedSubCategory"
                      :options="subCategories"
                      :placeholder="$t('Select a sub category')"
                      track-by="name"
                      label="name"
                      :show-labels="false"
                      @select="handlerGetSubCategoryProperties"
                    >
                      <template slot="noOptions">
                        <span>{{ $t('Please select main category') }}</span>
                      </template>
                    </Multiselect>
                  </client-only>
                </div>
                <span v-if="errors[0]" class="validation_error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </b-col>
            <!-- Sub category Properties type => get Properties by sub category id-->
            <b-col
              md="6"
              class="mb-3"
              v-if="subCategoryProperties.length > 1 && !subCategoryEmpty"
            >
              <ValidationProvider
                name="sub category type"
                rules="required"
                v-slot="{ errors }"
                mode="eager"
              >
                <div>
                  <label class="mb-2 w-100 text-capitalize form_label">{{
                    $t('sub category type')
                  }}</label>
                  <client-only>
                    <Multiselect
                      v-model="selectedSubCategoryProperty"
                      :options="subCategoryProperties"
                      :placeholder="$t('Select sub category type')"
                      track-by="name"
                      label="name"
                      :show-labels="false"
                      @select="handlerAddAnotherOption"
                    >
                    </Multiselect>
                  </client-only>
                </div>
                <span v-if="errors[0]" class="validation_error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </b-col>
            <!-- Options list => from sub category Properties -->
            <b-col
              md="6"
              class="mb-3"
              v-if="selectedSubCategoryProperty != null && !subCategoryEmpty"
            >
              <ValidationProvider
                :name="selectedSubCategoryProperty.slug"
                rules="required"
                v-slot="{ errors }"
                mode="eager"
              >
                <div>
                  <label class="mb-2 w-100 text-capitalize form_label">{{
                    selectedSubCategoryProperty.slug
                  }}</label>
                  <client-only>
                    <Multiselect
                      v-model="selectedSubCategoryPropertyOption"
                      :options="selectedSubCategoryProperty.options"
                      :placeholder="$t('Select option')"
                      track-by="name"
                      label="name"
                      :show-labels="false"
                      @select="handlerGetSubCategoryPropertyOptions"
                    >
                    </Multiselect>
                  </client-only>
                </div>
                <span v-if="errors[0]" class="validation_error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </b-col>
            <!-- Other input => if other option -->
            <b-col
              md="6"
              class="mb-3"
              v-if="isAnotherOption && !subCategoryEmpty"
            >
              <ValidationProvider
                name="other"
                rules="required"
                v-slot="{ errors }"
                mode="eager"
              >
                <div>
                  <label class="mb-2 w-100 text-capitalize form_label">{{
                    $t('Other option')
                  }}</label>
                  <input
                    class="other_input w-100"
                    type="text"
                    :placeholder="$t('Type your other option')"
                    v-model="otherOptionValue"
                  />
                </div>
                <span v-if="errors[0]" class="validation_error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </b-col>
            <!-- Options list from each sub category property -->
            <b-col
              md="6"
              class="mb-3"
              v-if="
                PropertyOptions != null &&
                !isAnotherOption &&
                !subCategoryEmpty &&
                selectedSubCategoryPropertyOption != null
              "
            >
              <ValidationProvider
                :name="PropertyOptions.slug"
                rules="required"
                v-slot="{ errors }"
                mode="eager"
              >
                <div>
                  <label class="mb-2 w-100 text-capitalize form_label">{{
                    PropertyOptions.slug
                  }}</label>
                  <client-only>
                    <Multiselect
                      v-model="selectedPropertyOptions"
                      :options="PropertyOptions.options"
                      :placeholder="$t('Select option')"
                      track-by="name"
                      label="name"
                      :show-labels="false"
                      @select="handlerGetPropertyTypes"
                    >
                    </Multiselect>
                  </client-only>
                </div>
                <span v-if="errors[0]" class="validation_error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </b-col>
            <!-- Options list from sub category property -->
            <b-col
              md="6"
              class="mb-3"
              v-if="
                PropertyOptionTypes != null &&
                !isAnotherOption &&
                !subCategoryEmpty &&
                selectedPropertyOptions != null
              "
            >
              <ValidationProvider
                :name="PropertyOptionTypes.slug"
                rules="required"
                v-slot="{ errors }"
                mode="eager"
              >
                <div>
                  <label class="mb-2 w-100 text-capitalize form_label">{{
                    PropertyOptionTypes.slug
                  }}</label>
                  <client-only>
                    <Multiselect
                      v-model="selectedPropertyType"
                      :options="PropertyOptionTypes.options"
                      :placeholder="$t('Select option')"
                      track-by="name"
                      label="name"
                      :show-labels="false"
                    >
                    </Multiselect>
                  </client-only>
                </div>
                <span v-if="errors[0]" class="validation_error">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </b-col>
          </b-row>
          <!-- Submit From -->
          <div class="d-flex justify-content-center mt-5">
            <SharedAppButton>{{ $t('Submit') }}</SharedAppButton>
          </div>
        </form>
      </ValidationObserver>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'MainForm',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedMainCategory: null,
      subCategories: [],
      selectedSubCategory: null,
      subCategoryProperties: [],
      selectedSubCategoryProperty: null,
      selectedSubCategoryPropertyOption: null,
      isAnotherOption: false,
      otherOptionValue: null,
      PropertyOptions: null,
      selectedPropertyOptions: null,
      PropertyOptionTypes: null,
      selectedPropertyType: null,
      subCategoryEmpty: true,
    }
  },
  methods: {
    // Handler get sub category - depends on selected main category
    handlerGetSubCategory(selectedMainCategory) {
      this.selectedSubCategory = null
      this.subCategories = []
      this.subCategoryEmpty = true
      this.subCategories = selectedMainCategory.children || []
    },
    // Handler get Sub Category Properties - depends on selected sub category
    async handlerGetSubCategoryProperties() {
      this.subCategoryEmpty = false
      await this.$axios
        .$get(`properties?cat=${this.selectedSubCategory.id}`)
        .then((res) => {
          this.subCategoryProperties = res.data
        })
    },
    // Handler Add another option for each sub category options
    handlerAddAnotherOption(selectedOption) {
      this.selectedSubCategoryPropertyOption = null
      this.selectedPropertyOptions = null
      this.isAnotherOption = false
      let anotherOption = { name: 'other' }
      selectedOption.options.length > 0
        ? this.selectedSubCategoryProperty.options.push(anotherOption)
        : this.selectedSubCategoryProperty
    },
    // Sub Category Property Options
    async handlerGetSubCategoryPropertyOptions(selectedOption) {
      this.selectedPropertyOptions = null
      this.PropertyOptionTypes = null
      if (selectedOption.name.toLowerCase() != 'other') {
        await this.$axios
          .$get(
            `get-options-child/${this.selectedSubCategoryPropertyOption.id}`
          )
          .then((res) => {
            // destructuring array to get first element
            ;[this.PropertyOptions] = res.data
            this.isAnotherOption = false
          })
      } else {
        this.isAnotherOption = true
      }
    },
    // Get Options List for every sub category property or type etc...
    async handlerGetPropertyTypes(selectedOption) {
      this.selectedPropertyType = null
      this.PropertyOptionTypes = null
      await this.$axios
        .$get(`get-options-child/${selectedOption.id}`)
        .then((res) => {
          ;[this.PropertyOptionTypes] = res.data
        })
    },
    // Handle main request to send data to the parent
    handleRequest() {
      let allSelectedData = []
      // push shared values in all cases
      allSelectedData.push(
        {
          name: 'Main Category',
          value: this.selectedMainCategory.name,
        },
        {
          name: 'Sub Category',
          value: this.selectedSubCategory.name,
        },
        {
          name: 'Sub Category Type',
          value: this.selectedSubCategoryProperty.name,
        }
      )
      // check if other value or not
      if (this.isAnotherOption) {
        allSelectedData.push(
          {
            name: this.selectedSubCategoryProperty.slug,
            value: this.selectedSubCategoryPropertyOption.name,
          },
          {
            name: 'Other Value',
            value: this.otherOptionValue,
          }
        )
      } else {
        allSelectedData.push({
          name: this.selectedSubCategoryProperty.slug,
          value: this.selectedSubCategoryPropertyOption.name,
        })
      }
      // check if there are another property then push it
      if (
        this.selectedPropertyOptions != null &&
        this.PropertyOptions != null &&
        this.selectedSubCategoryPropertyOption != null
      ) {
        allSelectedData.push({
          name: this.PropertyOptions.slug,
          value: this.selectedPropertyOptions.name,
        })
      }
      // check  another property then push it
      if (
        this.selectedPropertyType != null &&
        this.PropertyOptionTypes != null &&
        this.selectedPropertyOptions != null
      ) {
        allSelectedData.push({
          name: this.PropertyOptionTypes.slug,
          value: this.selectedPropertyType.name,
        })
      }
      // Emit event to receive data in parent - will call it in the parent
      this.$emit('formSubmitted', allSelectedData)
    },
    // submit from after be sure about validation and values
    submitForm() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        } else {
          this.handleRequest()
        }
      })
    },
  },
  watch: {
    // Watch su category value when change , then reset the next values
    selectedSubCategory(newVal, oldVal) {
      if (newVal) {
        this.selectedSubCategoryProperty = null
        this.subCategoryProperties = []
        this.selectedPropertyOptions = null
        this.PropertyOptions = null
        this.selectedPropertyType = null
        this.PropertyOptionTypes = null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.main_form_wrapper {
  .form_label {
    color: $text-color;
    @include customFontProperties(17, 500);
    text-align: initial;
  }
  .other_input {
    border: 1px solid $border-color;
    padding: 10px;
    outline: none;
    border-radius: 8px;
    color: $text-color;
    transition: all 0.3s ease-in-out;
    &::placeholder {
      color: $text-color;
      @include customFontProperties(14);
    }
    &:focus {
      border-color: $second-color;
    }
  }
}
</style>
