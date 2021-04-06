const sub = new Vue({
  el: '#sub',
  data: {
    newItem: '',
    tasks: [],
  },

  methods: {
    addTask: function (e) {
      if (this.newItem == '') return;

      const task = {
        item: this.newItem
      };

      this.tasks.push(task);
      this.newItem = ''
    },

    onclick: function (index) {
      this.tasks.splice(index, 1)
    },
  },
});

const test = new Vue({
  el: '#test',
  data: {
    newTask: '',
    taskLists: []
  },
  methods: {
    addTask: function (e) {
      if (this.newTask == '') return;

      const task = {
        item: this.newTask,
        isDone: false
      };

      this.taskLists.push(task);
      this.newTask = ''
    },

    deleteTask: function (index) {
      this.taskLists.splice(index, 3);
    },
  },
});
