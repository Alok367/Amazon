
class ProductComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            msg : ""
        }
    }
    render(){
        return(
            <div>
                
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