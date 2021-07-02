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

      this.$store.dispatch('postApi', this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()

    }

  }

}
