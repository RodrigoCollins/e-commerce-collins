import './App.css'
import ItemList from './components/Shop/ItemList'
import {Navbar} from './components/Navbar/Navbar'
import {Banner} from './components/Banner/Banner'
import {About} from './About'
import {Faq} from './Faq'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './components/Shop/ItemDetailContainer'





function App() {
  return (
   
    <div className="App">
    <Router>
      
      <Navbar/>
            <Switch> 
               <Route path="/about">
                    <Banner greeting='Welcome to Cenation'/>
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
                 
            </Switch> 
    </Router>
         
       
    
    </div>
  
  );
}

export default App;