import ItemList from './components/Shop/ItemList'
import {Navbar} from './components/Navbar/Navbar'
import {Banner} from './components/Banner/Banner'
import {About} from './About'
import {Faq} from './Faq'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './components/Shop/ItemDetailContainer'
import CartContainer from './components/Cart/CartContainer'
import { CartProvider } from './context/cartcontext'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
   
    <div className="App">
    <CartProvider>
    <Router>
      <Navbar/>
            <Switch> 
               <Route path="/about">
                    <About/>
                </Route> 
                <Route exact path="/">
                    <Banner greeting='Welcome to Cenation'/> 
                    <ItemList/>
                </Route>
                <Route path="/faq">    
                    <Faq/>
                </Route>
                <Route path="/itemdetail/:id" children={<ItemDetailContainer/>}/>
                <Route  path="/cart">
                  <CartContainer/>
                </Route> 
            </Switch> 
            <Footer/>
    </Router>
    </CartProvider>
         
       
    
    </div>
  
  );
}

export default App;