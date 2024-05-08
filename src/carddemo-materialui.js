 
 
 
 function CardDemo(){
    <>
        <h1>Material-Ui Card</h1>
    </>
}
class MainContent extends React.Component {
    render(){
        return(
          <div className="container-fluid">
             <CardDemo /> 
          </div>  
        )
    }
}
const rootElement= document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <MainContent />
)