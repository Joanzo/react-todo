var $ = require('jquery');

module.exports = {

    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo)=> {
            return !todo.completed || showCompleted;
        });

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo)=> {
            var todoText = todo.text.toLowerCase();
            return searchText.length === 0 || todoText.indexOf(searchText.toLowerCase()) > -1;
        });


        // Sort todos with non-completed first
        // Sort takes 1 arguments function with 2 variable, comparing a & b. return -1: tell a should come before b, return 1: b should come before a, return 0: nothing happened
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });


        return filteredTodos;
    }
};
