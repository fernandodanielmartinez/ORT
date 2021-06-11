import Alumnos from '../../../alumnos/index.vue'

export default {

  name: 'src-components-formulario',

  components: {Alumnos},

  props: [],

  data () {

    return {
      formData : this.getInicialData(),
      formState : {},
      nombreApellidoLengthMin : 3,
      nombreApellidoLengthMax : 15,
      notaMin : 0,
      notaMax : 10,
      alumnos : []
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
        apellido: '',
        nota: ''
      }
    },

    enviar() {
      this.alumnos.push(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()
    }

  }

}
