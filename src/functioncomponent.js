const titleText = "User Login";
const Login = () => (
    <>
    <h3 align="center">{titleText}</h3>
        <dl>
            <dt>UserName</dt>
            <dd><input type="text" className="form-control" placeholder = "UserName" /></dd>
            <dt>Password</dt>
            <dd><input type="password" className="form-control" placeholder= "Password" /></dd>
        </dl>
        <button className="btn btn-primary btn-block ">Login</button>
    </>
);
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <Login />
);