/**
 * Set up router
 */
 FlowRouter.route("/", {
   action: function() {
     Meteor.setTimeout(function(){
       app.setProps({
         content: <App />
      });
     }, 10000);
   }
});

FlowRouter.route('/post/:_id', {
   name: 'post',
   action: function(params) {
    //  ReactLayout.render(BlogLayout, {
    //    content: <PostPage _id={params._id} />
    //  });
   }
});
