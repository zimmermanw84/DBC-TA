!function() {

  "use strict";

  var TodoList = function() {
    this.tasks = [];
  };

  var Task = function(description, id) {
    this.id = id;
    this.description = description;
    this.completed = false;
  };

  Task.prototype.complete = function() {
    return this.completed = true;
  };

  // Never re-write the entire prototype for a native JS object such as Array or Object
  // If you want to add a function to such prototype use ( Array.prototype.someNewFunction = function() {...}; )
  TodoList.prototype = {
    addTask: function(description) {
      if (!description) throw new TypeError("MUST ENTER A DESCRIPTION!");

      var id = this.createTaskId();

      this.tasks.push( new Task(description, id) );
    },
    createTaskId: function() {
      return this.tasks.length + 1;
    },
    list: function() {

      // Iterate through and log each task obj
      for (var i = 0; i < this.tasks.length; i++) {

        if (this.tasks[i]) {
          console.log("Task: ", this.tasks[i]);
        }
      }
    },
    getTaskById: function(taskId) {
      if (!taskId) throw new TypeError("MUST ENTER TASK ID!");
      var foundTask;

      for (var i = 0; i < this.tasks.length; i++) {
        foundTask = this.tasks[i].id === taskId ? this.tasks[i] : undefined;
        if (foundTask) break;
      }

      if (!foundTask) console.log("No Task by that ID.. Sorry :(");

      return foundTask;
    },
    removeTaskById: function(taskId) {
      if (!taskId) throw new TypeError("Must GIVE TASK ID!");

      for (var i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === taskId) {
          console.log("TASK: ", this.tasks[i], " REMOVED FOREVER!");
          delete this.tasks[i];
          break;
        } else {
          throw new TypeError("NO TASK FOUND");
        }
      }
    }

  };

  // Expose only TodoList constructor to the global name space
  // No need to expose Task because Task will not exist without TodoList
  // Rule of least exposure :)
  window.TodoList = TodoList;

}();

// Driver code


var MyTodoList = new TodoList();
MyTodoList.addTask("Milk");
MyTodoList.addTask("Bread");
MyTodoList.addTask("Water");
MyTodoList.addTask("Wash Car");
MyTodoList.list();