const app = new Vue({
  el: '#app',
  data: {
    message: 'メッセージですdddd',
    basePrice: 100
  },
  computed: {
    tacIncludedPrice: {
      get: function () {
        return parseInt(this.basePrice * 1.1)
      },
      set: function (tacIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.1)
      }
    },
    computedNumber: function(){
      return Math.random()
    }
  },
  methods: {
    methodsNumber: function() {
      return Math.random()
    }
  }
  
});
