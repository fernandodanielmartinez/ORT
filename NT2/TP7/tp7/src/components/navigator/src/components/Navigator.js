import Body from '../../../body/index.vue'

export default {

  name: 'src-components-navigator',

  components: {Body},

  props: [],

  data () {

    return {

    }
    
  },

  computed: {

  },

  mounted () {
    this.restart()
  },

  methods: {

    easyButton() {
      if (this.$store.state.isHard) {
        this.$store.dispatch('modifyDifficulty', false)
        this.$store.dispatch('modifySquaresQty', 3)
        this.restart();
      }
    },
 
    hardButton() {
      if (!this.$store.state.isHard) {
        this.$store.dispatch('modifyDifficulty', true)
        this.$store.dispatch('modifySquaresQty', 6)
        this.restart();
      }
    },

    resetButton() {
      this.restart();
    },

    getClass(estado) {
      return [
        {
          'selected': estado
        },
      ]
    },

    PickColor() {
      return Math.floor(Math.random() * this.$store.state.squaresQty );
    },

    createNewColors(numbers) {
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
        return arr;
    },

    createRandomStringColor() {
      var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
      return newColor;
    },

    randomInt() {
      return Math.floor(Math.random() * 256);
    },

    restart() {
      this.$store.dispatch('modifyColors', this.createNewColors(this.$store.state.squaresQty))
      this.$store.dispatch('modifyPickedColor', this.$store.state.colors[this.PickColor()])
      this.$store.dispatch('modifyNavigatorMessage', '')
      this.$store.dispatch('modifyResetButtonText', 'New colors')
    }

  }

}
