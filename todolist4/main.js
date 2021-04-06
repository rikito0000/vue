const app = new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: []
  },
  methods: {
    addTask: function(e) {
      if(this.newTask == '') return;

      const task = {
        item: this.newTask,
        isDone: false
      };

      this.tasks.push(task);
      this.newTask = '';
    },
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    },
  },
});

