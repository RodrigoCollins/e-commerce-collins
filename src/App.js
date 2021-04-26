import './App.css'
import ItemListContainer from './components/Shop/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Shop/Banner'



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner greeting='Welcome to Cenation'/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
