PostPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    console.log(this.props._id);
    return {
      post: TasksCollection.findOne({_id: this.props._id})
    }
  },
  render() {
    return <div>
      <a href="/">Back</a>
      <h3>title</h3>
      <p>{this.data.post.content}</p>
    </div>;
  }
});