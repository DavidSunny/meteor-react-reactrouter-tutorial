const { History } = ReactRouter;

const { AppBar, Menu, MenuItem, Text, Icon, Block, Btn, BtnItem } = Essence;

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
        <h1 className="e-text-amber-300">Home</h1>
      </div>
    )
  }
});
