const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function (e) {
      if (this.newItem == '') return ;
      // もし未入力の場合は配列にタスクを追加しない処理
k
      const todo = {
        item: this.newItem,
        isDone: false
      };
      // 配列の中身をオブジェクトにするため

      this.todos.push(todo);
      this.newItem =''
    },

    clickDelete: function(index) {
      this.todos.splice(index, 1)
      //双方向データバイディングがされているので
      //表示されているタスクはデータが消えると同時に削除される
    },
  },
});


