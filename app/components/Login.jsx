var React = require('react');
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
    onLogin() {
        var {dispatch} = this.props;
        dispatch(actions.startLogin());
    },
    render: function() {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <p>
                                Login with Github account below.
                            </p>
                            <button className="button" onClick={this.onLogin}>Login with Github</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Redux.connect()(Login);
