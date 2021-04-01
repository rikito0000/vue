// const ap = new Vue({
//   el: '#ap',
//   data: {
//     message: 'Hello ',
//     count: 0,
//     user: {
//       lastName: 'yamada',
//       firstName: 'taro',
//       prefecture: 'Tokyo'
//     },
//     colors: [
//       'Red',
//       'Green',
//       'Blue'
//     ],
//   },
// });



const app = new Vue({
  el: '.app',
  data: {
    message: 'Hello Vue.js',
    toggle: false,
    show: false,
    tests: ['red', 'blue', 'green'],
    user: {

      firstName: 'taro',
      lastName: 'yamada',
      age: 28

    },
    now: '',
    no: '',
    template: '初'
  },
  methods: {
    onclick: function () {
      this.now = new Date().toLocaleString();
      this.no = new Date().toLocaleDateString();
    }
  }
});
//　 v-bind:タグ要素ごと削除するためたくさん切り替える場合は負荷がかかるif
// 　切り替えが多い場合はv-showを使用してdomからは削除されずcssのdisplayプロパティを切り替えている描画コストの面からこちらを使用する




