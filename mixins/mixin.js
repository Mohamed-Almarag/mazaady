
export default {
  methods: {
    removeHyphenFromText(text) {
      let removeHyphen = text.replace(/-+/g, ' ')
      return removeHyphen
    },
  },
}
