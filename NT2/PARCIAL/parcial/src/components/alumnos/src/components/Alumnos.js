export default  {

    name: 'src-components-alumnos',

    props: ['alumnos'],

    mounted () {

    },

    data () {

      return {
        promedioTotal : 0
      }

    },

    methods: {
      setColor(nota) {
        if (nota >= 0 && nota <= 3) {
          return {
            'color': 'red'
          }    
        } else if (nota >= 4 && nota <= 6) {
          return {
            'color': 'yellow'
          }    
        } else {
          return {
            'color': 'green'
          }    
        }
      },

      calcularPromedioTotal() {
        var sum = Number(0)
        for (var a of this.alumnos) {
          sum += a.nota
        }
        this.promedioTotal = sum / this.alumnos.length
        return this.promedioTotal
      }
    },

    computed: {

    }

}
