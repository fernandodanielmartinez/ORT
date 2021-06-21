import Square from '../../../square/index.vue'

export default {

  name: 'src-components-body',

  components: {Square},

  data () {

    return {

    }
    
  },

  computed: {
    setColors() {
      if (this.$store.state.pickedColor === this.$store.state.colorSelected) {
        this.$store.dispatch('modifyNavigatorMessage', 'You Picked Right!')
        this.$store.dispatch('modifyResetButtonText', 'Play again!')
        this.$store.dispatch('modifyHeaderBackGColor', this.$store.state.pickedColor)
        this.$store.dispatch('modifyColorSelected', '')
        return this.$store.state.pickedColor
      } else if (this.$store.state.colorSelected !== '') {
        this.$store.dispatch('modifyNavigatorMessage', 'Try Again!')
      } else {
        this.$store.dispatch('modifyHeaderBackGColor', 'steelblue')
      }
    }
  },

  mounted () {

  },

  methods: {

  }

}
