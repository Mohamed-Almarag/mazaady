import Vue from 'vue'
import VueToasted from 'vue-toasted'
Vue.use(VueToasted)

const notification = {
  methods: {
    TriggerNotify(type, message) {
      this.$toasted.show(message, {
        type: type,
        duration: 1000,
        position: 'top-right',
      })
    },
  },
}

Vue.mixin(notification)
