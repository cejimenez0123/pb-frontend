const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      this.props.loggedIn === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )