<template>
  <div class="codificacion">
      <input type="text" :value="texto" @input="actualizar($event)"> 
      <h4 v-if="contarLetras"><b>cantidad: {{ contarLetras }}</b></h4>
      <h4 v-if="contarLetras"><b>{{ texto | codificado}} (codificado)</b></h4>
      <h4 v-if="contarLetras"><b>{{ texto | mayuscula}} (Mayúscula)</b></h4>
      <h4 v-if="contarLetras"><b>{{ texto | minuscula}} (Minúscula)</b></h4>
      <h4 v-if="contarLetras"><b>{{ texto | mayusAndMinus}} (Mayúscula/Minúscula)</b></h4>
      <h4 v-if="contarLetras"><b>{{ texto | minusAndMayus}} (Minúscula/Mayúscula)</b></h4>
      <p>respuestas: 1:b 2:b 3:c 4:b 5:b</p>
  </div>
</template>

<script>
export default {
  name: 'Codificacion',
  data() {
    return {
      texto: '',
    }
  },
  methods: {
    actualizar: function (e) {
      this.texto = e.target.value
    }
  },
  computed: {
    contarLetras: function () {
      return this.texto.length
    }
  },
  filters:{
    codificado: function (value) {
        let arr = []
        let newValue = value.toLowerCase()
        for (let i = 0; i < newValue.length; i++) {
          if (newValue.charAt(i) == 'a') {
            arr.push('u')
          } else if (newValue.charAt(i) == 'e') {
            arr.push('o')
          } else if (newValue.charAt(i) == 'o') {
            arr.push('e')
          } else if (newValue.charAt(i) == 'u') {
            arr.push('a')
          } else {
            arr.push(newValue.charAt(i))
          }
        }
        return arr.join('')
    },
    mayuscula: function (value) {
      return value.toUpperCase()
    },
    minuscula: function (value) {
      return value.toLowerCase()
    },
    mayusAndMinus: function (value) {
      let texto = value.charAt(0).toUpperCase()
      for (let i = 1; i < value.length; i++) {
        texto = (i % 2 == 0) ? texto + value.charAt(i).toUpperCase() : texto + value.charAt(i).toLowerCase()
      } 
      return texto
    },
    minusAndMayus: function (value) {
      let texto = value.charAt(0).toLowerCase()
      for (let i = 1; i < value.length; i++) {
        texto = (i % 2 == 0) ? texto + value.charAt(i).toLowerCase() : texto + value.charAt(i).toUpperCase()
      } 
      return texto
    },
  },
}
</script>

