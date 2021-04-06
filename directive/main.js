const app = new Vue({
 elw: '#app',
 data: {
   message: 'Hello',
   good: 'hello <span style="color:red;">Vue.js</span>',
   get: 'hello vue.js',
   number: 100,
   ok: true,
   price: 2980000000000
 },
 methods: {
   clickHandler: function(event) {
     this.message = this.message.split('').reverse().join('')
   },
 },
 filters: {
   numberFormat: function(value){
     return value.toLocaleString()
   }
 }
});
