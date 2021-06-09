export default {

  name: 'src-components-square',

  components: {},

  props: ['colors', 'pickedColor'],

  data () {
    return {

    }
  },

  computed: {

  },

  mounted () {

  },

  methods: {
    setColor() {
      return {
        'background-color': this.colors
      }
    },
    colorSelected(e) {
      if (e.target.style.backgroundColor !== this.pickedColor) {
        e.target.style.backgroundColor = '#232323'
      }
      this.$emit('colorSelected', e.target.style.backgroundColor)
    }
  }

}
