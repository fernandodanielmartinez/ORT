export default  {

    name: 'src-components-http',

    props: [],

    mounted () {

    },

    data () {

    return {
        url: 'https://60a27ab7745cd70017577277.mockapi.io/usuarios',
        posts : []
    }

    },

    methods: {

      getPostsCb() {
        let xhr = new XMLHttpRequest
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest',respuesta)
            this.posts = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', e => {
            console.error(`Error XMLHttpRequest ->`, e)
        })
        xhr.send()
      },

      getPostsFetch() {
          fetch(this.url)
          .then(datos => datos.json())
          .then(respuesta => {
            console.log('FETCH',respuesta)
            this.posts = respuesta
          })
          .catch(error => console.error(error))
      },

      getPostsAxios() {
          this.axios(this.url)
          .then( respuesta => {
            console.log('AXIOS', respuesta.data)
            this.posts = respuesta.data
          })
          .catch(error => console.error(error))
      }

    },

    computed: {

      getCols() {
        return Object.keys(this.posts[0])
      }

    }

}
