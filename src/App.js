import './App.css'
import {ItemListContainer} from './components/Shop/ItemListContainer'
import {Navbar} from './components/Navbar/Navbar'
import {Banner} from './components/Banner/Banner'
import {About} from './About'
import {Faq} from './Faq'
import { BrowserRouter, Switch, Route } from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
        <Switch>
              <Navbar/>
          <Route exact path='/'>
              <Banner greeting='Welcome to Cenation'/>
          </Route>
          <Route path='/About'>
              <About/>
          </Route>
          <Route path='/Shop'>
              <ItemListContainer/>
          </Route>
          <Route path='/Faq'>
              <Faq/>
          </Route>
        </Switch>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
