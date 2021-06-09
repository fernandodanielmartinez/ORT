import Navigator from '../../../navigator/index.vue'

export default {

  name: 'src-components-header',

  components: {Navigator},

  props: [],

  data () {

    return {
      rgbHeader: 0,
      headerBackGColor : ''
    }
    
  },

  computed: {

  },

  mounted () {

  },

  methods: {
    setColor() {
      return {
        'background-color': this.headerBackGColor
      }
    }
  }

}
