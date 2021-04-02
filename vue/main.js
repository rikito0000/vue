Vue.component('hello-component', {
  template: '<p>hello</p>'
})


let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Wor',
    url: 'https://jp.vuejs.org',
    toggle: true,
    languages: ['javascript', 'ruby', 'python'],
  },
  methods: {
    onclick: function() {
      this.message = 'Clicked!'
    },
    // イベントハンドラーはmethodsオプションで表記する
  },
});


