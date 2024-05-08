 titleText = "User Login";
class Login extends React.Component{
    render(){
        return(
            <>
            <h3 align="center">{titleText}</h3>const
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className="btn btn-primary btn-block ">Login</button>
            </>
        );
    }
}
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
    <Login />
);