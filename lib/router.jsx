/**
 * Set up router
 */
FlowRouter.route("/", {
  action: function() {
    React.render(<App />, document.getElementById("content"));
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  action: function(params) {
    React.render(<PostPage _id={params._id} />, document.getElementById("content"));    
  }
});

FlowRouter.route('/transition', {
  action: function(params) {
    React.render(<Carousel imageSrc={[
      "http://stanfordflipside.com/images/3.jpg",
      "http://stanfordflipside.com/images/4.jpg",
      "http://stanfordflipside.com/images/5.jpg",
      "http://stanfordflipside.com/images/6.jpg"
      ]} />, document.getElementById("content"));    
  }
});
