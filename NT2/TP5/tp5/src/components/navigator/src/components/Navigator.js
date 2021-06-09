import Body from '../../../body/index.vue'

export default {

  name: 'src-components-navigator',

  components: {Body},

  props: [],

  data () {

    return {
      squaresQty : 6,
      isHard : true,
      colors : [],
      pickedColor : 0,
      navigatorMessage : '',
      resetButtonText : 'New colors'
    }
    
  },

  computed: {

  },

  mounted () {
    this.restart()
  },

  methods: {

    easyButton() {
      if (this.isHard) {
        this.isHard = false;
        this.squaresQty = 3;
        this.restart();
      }
    },
 
    hardButton() {
      if (!this.isHard) {
        this.isHard = true;
        this.squaresQty = 6;
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
      return Math.floor(Math.random() * this.squaresQty );
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
      this.colors = this.createNewColors(this.squaresQty);
      this.pickedColor = this.colors[this.PickColor()];
      this.navigatorMessage = ''
      this.resetButtonText = 'New colors'
      this.$emit('rgbHeader', this.pickedColor)
    }

  }

}
