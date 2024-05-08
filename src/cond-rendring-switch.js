function BasicInfo(){
    return(
      <div>
        <h2>Basic Info</h2>
        <div className="card">
            <div className="card-header">
                <h2>Jbl speaker</h2>
                <p>Price : &#8377; 6700.44/ -</p>
            </div>
        </div>
      </div>
    )
}
function Preview(){
    return(
      <div>
        <h2>Preview</h2>
        <div className="card">
            <div className="card-body">
               <img src="Speaker.png" width="400" height="300" />
            </div>
        </div>
      </div>
    )
}
function Description(){
    return(
      <div>
        <h2>Description</h2>
        <div className="card">
            <div className="card-header">
                <h2>Features</h2>
                <ul>
                    <li>Feature-1</li>
                    <li>Feature-2</li>
                    <li>Feature-3</li>
                </ul>
            </div>
        </div>
      </div>
    )
}
 class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        viewName : 'BasicInfo',
        container: ''
    }
    this.ViewChanged= this.ViewChanged.bind(this);
  }
  ViewChanged(e){
      switch(e.target.name){
       case "BasicInfo":
       this.setState({
        container: <BasicInfo />
       });
       break;
        case "Preview":
        this.setState({
        container: <Preview />
       });
       break;
        case "Description":
        this.setState({
        container: <Description />
       });
       break;
      }
  }
    render(){
       return(
        <div>
        <h2>Product Details</h2>
        <div className="btn-toolbar">
          <div className="btn-group">
            <button onClick={this.ViewChanged} name="BasicInfo" className="btn btn-primary">BasicInfo</button>
            <button onClick={this.ViewChanged} name="Preview" className="btn btn-info">Preview</button>
            <button onClick={this.ViewChanged} name="Description" className="btn btn-danger">Description</button>
          </div>
        </div>
        <div>
            {this.state.container}
        </div>
       </div>
       )
    }
}
class MainContent extends React.Component {
    render(){
        return(
          <div className="container-fluid">
             <ProductComponent /> 
          </div>  
        )
    }
}
const rootElement= document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <MainContent />
)