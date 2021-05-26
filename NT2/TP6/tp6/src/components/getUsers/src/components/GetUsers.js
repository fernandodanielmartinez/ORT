export default  {

    name: 'src-components-http',

    props: [],

    mounted () {

      this.axios(this.urlUsers)
      .then(respuesta => {
        this.users = respuesta.data
      })
      .catch(error => console.error(error))

    },

    data () {

      return {
          urlUsers: 'https://60a27ab7745cd70017577277.mockapi.io/getUsers',
          users: []
      }

    },

    methods: {

    },

    computed: {

      getCols() {
        return Object.keys(this.users[0])
      }

    }

}
