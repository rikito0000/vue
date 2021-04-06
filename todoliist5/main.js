const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    tasks: []
  },
  methods: {
    addItem: function() {
      // alert('test');
      if(this.newItem == '') return;

      const task = {
        item: this.newItem,
        isDone: false
      };

      this.tasks.push(task);
      this.newItem = '';
    },
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    }
  },
});
