const {
  Router,
  Route,
  IndexRoute
  } = ReactRouter;

const createHistory = ReactRouter.history.createHistory;

const onEnterTodoListPage= (location, replaceWith) => {
  Tracker.autorun(function() {
    const rightBeforePath = AppStore.get('RIGHT_BEFORE_PATH');
    if (rightBeforePath) {
      // 직전 경로가 리스트의 세부 item view이면 스크롤 포지션을 기억하고 있어야함
      // 아닐 경우 스크롤 포지션 초기화
    }
  });
};

const routes = (
  <Route path="/" component={AppBody}>
    <Route path="lists/:listId" component={TodoListPage} onEnter={onEnterTodoListPage}/>
    <Route path="join" component={AuthJoinPage} />
    <Route path="signin" component={AuthSignInPage} />
    <IndexRoute component={AppLoading} />
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
