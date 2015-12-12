const {
  Router,
  Route,
  IndexRoute
  } = ReactRouter;

const createHistory = ReactRouter.history.createHistory;

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={AppHome} />
    <Route path="home" component={AppHome} />
    <Route path="*" component={AppNotFound} />
  </Route>
);

const router = (
  <Router history={createHistory()}>
    {routes}
  </Router>);

Meteor.startup(function () {
  ReactDOM.render(router, document.getElementById("app-container"));
});
