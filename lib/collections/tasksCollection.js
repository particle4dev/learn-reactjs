TasksCollection = new Meteor.Collection('tasksCollection',{
    transform: function(doc) {return new TasksCollectionDocument(doc);}
});

TasksCollectionDocument = function(doc){
    var self = this;
    _.extend(self, doc);
};
_.extend(TasksCollectionDocument.prototype, {
    constructor: TasksCollectionDocument
});

Meteor.methods({
  insertTask: function (task) {
    console.log(this.isSimulation);
    // Validate the data
    check(task, {
      content: String
    });
    if(!this.isSimulation){
      var Future = Npm.require('fibers/future');
      var Fiber = Npm.require('fibers');
      task.isSimulation23 = 'false';
      var fiber = Fiber.current;
      setTimeout(function() {
          fiber.run();
      }, 10000);
      Fiber.yield();
      return TasksCollection.insert(task);
    }
    else {
      // Insert into MongoDB and Minimongo
      task.isSimulation23 = 'true';
      return TasksCollection.insert(task);
    }
  }
});
