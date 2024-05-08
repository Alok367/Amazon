class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg: "Select Database Command"
        }
        this.DataOperations = this.DataOperations.bind(this);
    }
    DataOperations(e){
        switch(e.target.value){
            case "Insert" :
                this.setState(state=>({
                    msg: state.msg = "Record Inserted"
                }))
                break;
                case "Update" :
                    this.setState(state=>({
                        msg: state.msg = "Record Updated"
                    }))
                    break;
                    case "Delete" :
                        this.setState(state=>({
                            msg: state.msg = "Record Deleted"
                        }))
                        break;
        }
    }
    render(){
        return(
            <>
                <div className="btn-group">
                    <button value="Insert" onClick={this.DataOperations} className="btn btn-primary">Insert</button>
                    <button value="Update" onClick={this.DataOperations} className="btn btn-success">Update</button>
                    <button value="Delete" onClick={this.DataOperations} className="btn btn-danger">Delete</button>
                </div>
                <h3 className="text-center">{this.state.msg}</h3>
            </>
        )
    }
}
class MainContent extends React.Component{
    render(){
        return(
           <div className="container-fluid">
            <h3>Event Handling</h3>
            <Product />
           </div>
        )
    }
}
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <MainContent />
)