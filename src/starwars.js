const titleText = "Star Wars";
function ButtonClick(){
   
}
const Login = () => (
    <>
      <h3>{titleText}</h3>
        <dl>
            <dt>Name</dt>
            <dd><input type="text" className = "form-control" placeholder="Name" /></dd>
            <dt>Password</dt>
            <dd><input type="password" className="form-control" placeholder="Password" /></dd>
        </dl>
        <button className="btn btn-primary btn-block"  onClick={ButtonClick}>Login </button> 
    </>
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <Login />
);