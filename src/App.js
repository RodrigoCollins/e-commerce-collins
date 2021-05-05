import './App.css'
import ItemList from './components/Shop/ItemList'
import {Navbar} from './components/Navbar/Navbar'
import {Banner} from './components/Banner/Banner'
import {About} from './About'
import {Faq} from './Faq'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './components/Shop/ItemDetailContainer'
import Cart from './Cart'


function App() {
  return (
   
    <div className="App">
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
                  <Cart/>
                </Route> 
              
            </Switch> 
    </Router>
         
       
    
    </div>
  
  );
}

export default App;