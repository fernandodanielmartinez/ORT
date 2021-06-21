export default {

  name: 'src-components-square',

  components: {},

  props: ['color'],

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
        'background-color': this.color
      }
    },
    colorSelected(e) {
      if (e.target.style.backgroundColor !== this.$store.state.pickedColor) {
        e.target.style.backgroundColor = '#232323'
      }
      this.$store.dispatch('modifyColorSelected', e.target.style.backgroundColor)
    }
  }

}
