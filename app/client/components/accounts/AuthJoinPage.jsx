const Link = ReactRouter.Link;

AuthJoinPage = React.createClass({
  getInitialState() {
    return {
      errors: {}
    };
  },
  onSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm = event.target.confirm.value;

    const errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    if (confirm !== password) {
      errors.confirm = 'Please confirm your password';
    }

    this.setState({
      errors: errors
    });

    if (! _.isEmpty(errors)) {
      // Form errors found, do not create user
      return;
    }

    Accounts.createUser({
      email: email,
      password: password
    }, (error) => {
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
    return (
      <div className="page auth">
        <nav>
          <MenuOpenToggle />
        </nav>

        <div className="content-scrollable">
          <div className="wrapper-auth">
            <h1 className="title-auth">회원가입</h1>
            <p className="subtitle-auth">
              회원가입을 하면 시크릿 리스트를 볼 수 있습니다.
            </p>

            <form onSubmit={ this.onSubmit }>
              <AuthErrors errors={this.state.errors} />

              <AuthFormInput
                hasError={!!this.state.errors.email}
                type="email"
                name="email"
                label="Your Email"
                iconClass="icon-email" />

              <AuthFormInput
                hasError={!!this.state.errors.password}
                type="password"
                name="password"
                label="Password"
                iconClass="icon-lock" />

              <AuthFormInput
                hasError={!!this.state.errors.confirm}
                type="password"
                name="confirm"
                label="Confirm Password"
                iconClass="icon-lock" />

              <button type="submit" className="btn-primary">
                지금 가입하세요.
              </button>
            </form>
          </div>

          <Link to="/signin" className="link-auth-alt">
            이미 계정을 가지고 있습니까? 로그인.
          </Link>
        </div>
      </div>
    );
  },

  componentWillUnmount() {
    // if you're a route component (this.props), otherwise (this.context)
    const payload = {
      pathname: this.props.location.pathname
    };
    AppStore.call('RIGHT_BEFORE_PATH', payload);
  },
});
