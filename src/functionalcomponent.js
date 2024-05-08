const Login = () => (
    <div>
        <dl>
            <dt>UserName</dt>
            <dd><input type="text" /></dd>
            <dt>Password</dt>
            <dd><input type="password" /></dd>
        </dl>
        <button>Login</button>
    </div>
);
ReactDOM.render(
    <Login />,
    document.getElementById("root")
);