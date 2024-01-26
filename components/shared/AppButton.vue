<template>
  <button
    class="main_app_button text-capitalize d-flex justify-content-center align-items-center"
    v-if="!isLink"
    @click="handlerClick"
    :type="type"
  >
    <slot></slot>
  </button>
  <nuxt-link
    :to="toRoute"
    class="main_app_button text-capitalize d-flex justify-content-center align-items-center"
    :class="{ with_link: isLink }"
    v-else
  >
    <slot name="link"></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['click'],
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    toRoute: {
      type: String,
    },
    type: {
      type: String,
      default: 'btn',
    },
  },
  methods: {
    handlerClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.main_app_button {
  padding: 10px 15px;
  background-image: $gradient-color;
  border-radius: 15px;
  border: 1px solid $gradient-color;
  min-width: 125px;
  color: $white-color;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
  &.with_link {
    &:hover {
      text-decoration: none;
    }
  }
  &.w_100 {
    width: 100%;
  }
  &.tab_button {
    border: 1px solid $border-color;
    color: $text-color;
    background: $white-color;
    &.active,
    &:hover {
      color: $second-color;
      background: $tags-color;
      border-color: $second-color;
    }
    @media screen and (max-width: 767px) {
      min-width: 100px;
    }
  }
  &.add_review {
    @media screen and (max-width: 576px) {
      position: fixed;
      top: 60%;
      right: 15px;
      z-index: 33;
    }
  }
}
</style>
