export default  {

    name: 'src-components-http',

    props: [],

    mounted () {

      this.$store.dispatch('getApi')

    },

    data () {

      return {

      }

    },

    methods: {

    },

    computed: {

      getCols() {
        return Object.keys(this.$store.state.users[0])
      }

    }

}
