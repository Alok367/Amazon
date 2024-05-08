class Header extends React.Component
{
    render(){
        return(
            <header className=" text-center text-white bg-success">
                <h1>Amazon Shopping</h1>
            </header>
        )
    }
}
class Products extends React.Component
{
    render(){
        return(
            <div className="card-deck">
                <Product Name={'Sofa Caution'} Price={'15000.00'} Photo={'Sofa.jpg'} />
                <Product Name={'JBL Speaker'} Price={'3999.00'} Photo={'Speaker.png'} />
                <Product Name={'Converse Casuals'} Price={'7899.00'} Photo={'Shoe.png'} />
                <Product  Name={'Badminton'} Price={'999.00'} Photo={'Badminton.png'}/>
            </div>
        )
    }
}
class MenuContent extends React.Component
{
    render(){
        return(
            <nav>
                <ul>
                    <li><span className='fa fa-home'></span> Home</li>
                    <li><span className='fa fa-home'></span> Electronics</li>
                    <li><span className='fa fa-home'></span> Fashions</li>
                    <li><span className='fa fa-'></span> Sport</li>
                </ul>
            </nav>
        )
    }
}
class Product extends React.Component
{
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h3>{this.props.Name}</h3>
                </div>
                <div className="card-body text-center">
                    <img src={this.props.Photo} width="200" height="150"/>
                </div>
                <div className="card-footer">
                    <h4>{this.props.Price}</h4>
                </div>
            </div>
        )
    }
}
class MainContent extends React.Component
{
    render(){
        return(
            <>
                <Header />
               <section>
               <div className='row'>
                    <div className='col-3'>
                         <MenuContent />
                    </div>
                    <div className='col-9'>
                        <Products />
                    </div>
                </div>
               </section>
                <footer className='text-center'>
                    &copy; Copyright2023;
                </footer>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <MainContent />
)
