const Link = ReactRouter.Link;

AuthSignInPage = React.createClass({
  getInitialState() {
    return {
      errors: {}
    };
  },
  onSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    this.setState({
      errors: errors
    });

    if (! _.isEmpty(errors)) {
      // Form errors found, do not log in
      return;
    }

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        this.setState({
          errors: { 'none': error.reason }
        });

        return;
      }

      this.props.history.pushState(null, '/');
    });
  },
  render() {
    return <div className="page auth">
      <nav>
        <MenuOpenToggle />
      </nav>

      <div className="content-scrollable">
        <div className="wrapper-auth">
          <h1 className="title-auth">로그인</h1>
          <p className="subtitle-auth" >
            로그인을 하면 시크릿 리스트를 볼 수 있습니다.
          </p>

          <form onSubmit={ this.onSubmit }>
            <AuthErrors errors={this.state.errors} />

            <AuthFormInput
              hasError={!! this.state.errors.email}
              type="email"
              name="email"
              label="Your Email"
              iconClass="icon-email" />

            <AuthFormInput hasError={!! this.state.errors.password}
              type="password"
              name="password"
              label="Password"
              iconClass="icon-lock" />

            <button type="submit" className="btn-primary">
              로그인
            </button>
          </form>
        </div>
        <Link to="/join" className="link-auth-alt">
          계정이 필요합니까? 지금 회원가입하세요.
        </Link>
      </div>
    </div>
  },

  componentWillUnmount() {
    // if you're a route component (this.props), otherwise (this.context)
    const payload = {
      pathname: this.props.location.pathname
    };
    AppStore.call('RIGHT_BEFORE_PATH', payload);
  },
});
