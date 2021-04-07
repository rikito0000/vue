const app = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    basePrice: 100,
    km: 0,
    m: 0,
    mm: 0,
    firstName: '',
    lastName: '',
    fullName: ''
  },
  watch: {
    firstName: function(value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName: function(value) {
      this.fullName = this.firstName + ' ' + value
    },
    message: function(newValue, oldValue) {
      console.log(newValue, oldValue)
    },
    km: function(value) {
      // console.log(value)
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m: function(value) {
      this.km = value / 1000
      this.m = value
      this.mm = value * 1000
    },
    mm: function(value) {
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
    }
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.1)
      },
      set: function(taxPrice) {
        this.basePrice = Math.ceil(taxPrice / 1.1)
      }
    },
  },
  methods: {
    reverseMessageMethod: function(){
      return this.message.split('').reverse().join('')
    },
  },

});

