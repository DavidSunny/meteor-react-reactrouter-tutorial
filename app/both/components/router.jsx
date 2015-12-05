if (Meteor.isClient) {
  const { Router, Route, IndexRoute, Redirect } = ReactRouter;
  const browserHistory = ReactRouter.history.createHistory();

  const router = (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home}/>

        <Route path="about" component={About}/>
        <Route path="blog" component={Blog}/>

        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  );

  Meteor.startup(function () {
    ReactDOM.render(router, document.getElementById('app-container'));
  });
}
