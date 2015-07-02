var List = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    // This method knows how to listen to Meteor's reactive data sources,
    // such as collection queries
    return {
      // Return an array with all items in the collection
      tasks: TasksCollection.find().fetch()
    };
  },
  render() {
    return (
      <ul>
        {/* Access the data from getMeteorData() on this.data */}
        {
          this.data.tasks.map(function (task) {
            return <li key={task._id}>{task.content} {task.isSimulation23}</li>;
          })
        }
      </ul>
    );
  }
});

var NewTaskForm = React.createClass({
  onSubmit(event) {
    event.preventDefault();

    var taskContent = React.findDOMNode(this.refs.content).value;

    Meteor.call("insertTask", {
      content: taskContent
    });

    React.findDOMNode(this.refs.content).value = "";
  },
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="content" placeholder="Add a task..." />
      </form>
    );
  }
})
App = React.createClass({
  render() {
    return (
      <div>
        <List />
        <NewTaskForm />
      </div>
    );
  }
});
if (Meteor.isClient) {
  Meteor.startup(function () {
    app = React.render(<AppLayout />, document.getElementById('root'));
    console.log(app);
  });
}
