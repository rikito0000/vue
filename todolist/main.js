const app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        lists: [],
    },
    methods: {
        eventHandler: function(event) {
            if (this.newItem == '') return;

            let todo = {
                item: this.newItem
                isDone: false
            };

            this.lists.push(todo);
            this.newItem = '';

        },
    },
});

