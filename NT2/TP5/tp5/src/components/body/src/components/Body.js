import Square from '../../../square/index.vue'

export default {

  name: 'src-components-body',

  components: {Square},

  props: ['squaresQty', 'isHard', 'colors', 'pickedColor'],

  data () {

    return {
      colorSelected : ''
    }
    
  },

  computed: {
    setColors() {
      if (this.pickedColor === this.colorSelected) {
        this.$emit('navigatorMessage', "You Picked Right!")
        this.$emit('resetButtonText', "Play again!")
        this.$parent.$emit('headerBackGColor', this.pickedColor)
        this.colorSelected = ''
        return this.pickedColor
      } else if (this.colorSelected !== '') {
        this.$emit('navigatorMessage', "Try Again!")
      } else {
        this.$parent.$emit('headerBackGColor', 'steelblue')
      }
    }
  },

  mounted () {

  },

  methods: {

  }

}
