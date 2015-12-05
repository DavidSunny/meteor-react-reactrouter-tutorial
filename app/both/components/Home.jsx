const { History } = ReactRouter;

Home = React.createClass({
  mixins: [History],

  router(path, e) {
    e.preventDefault();
    e.stopPropagation();
    this.context.history.pushState(null, path);
  },

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div onClick={this.router.bind(null, '/blog')}>Blog</div>
      </div>
    )
  }
});
