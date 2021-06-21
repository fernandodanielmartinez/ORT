import Navigator from '../../../navigator/index.vue'

export default {

  name: 'src-components-header',

  components: {Navigator},

  props: [],

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
        'background-color': this.$store.state.headerBackGColor
      }
    }
  }

}
