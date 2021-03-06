var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});


ImageCarousel = React.createClass({
  propTypes: {
    imageSrc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <img width={'400px'} src={this.props.imageSrc} key={this.props.imageSrc} />
      </ReactCSSTransitionGroup>
    );
  }
});

Carousel = React.createClass({
  render: function() {
    var items = this.props.imageSrc.map(function(item, i) {
      return (
        <ImageCarousel imageSrc={item} />
      );
    }.bind(this));
    return (
      <div>
        {items}
      </div>
    );
  }
});