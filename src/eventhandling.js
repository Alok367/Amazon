class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg : "Select Database Command"
        }
        this.InsertClick = this.InsertClick.bind(this);
        this.UpdateClick = this.UpdateClick.bind(this);
    }
    InsertClick(){
        this.setState(state=>({
            msg: state.msg = "Record Inserted"
        }))
    }
    UpdateClick(){
        this.setState(state=>({
            msg: state.msg = "Record Updated"
        }))
    }
    DeleteClick(){
        this.setState(state=>({
            msg: state.msg = "Record Deleted Successfully"
        }))
    }
    render(){
        return(
            <>
               <div className="btn-group">
                <button onClick={this.InsertClick} className="btn btn-primary">Insert</button>
                <button onClick={this.UpdateClick} className="btn btn-success">Update</button>
                <button onClick={this.DeleteClick.bind(this)} className="btn btn-danger">Delete</button>
               </div>
               <h2 className="text-center">{this.state.msg}</h2>
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