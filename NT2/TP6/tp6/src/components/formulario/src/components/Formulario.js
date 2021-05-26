export default {

  name: 'src-components-formulario',

  components: {},

  props: [],

  data () {

    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120,
      urlUsers: 'https://60a27ab7745cd70017577277.mockapi.io/getUsers'
    }
    
  },

  computed: {

  },

  mounted () {

  },

  methods: {

    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    async enviar() {

      try {
        await this.axios.post(this.urlUsers, this.formData, {'content-type':'application/json'})
      }
      catch(error) {
        console.error(error)
      }

      this.formData = this.getInicialData()
      this.formState._reset()

    }

  }

}
