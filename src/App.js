import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer greeting='Welcome to Cenation'/>
     <ItemCount stock="5"/>
    </div>
  );
}

export default App;
