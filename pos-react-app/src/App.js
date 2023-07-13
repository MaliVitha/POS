
import './App.css';
import FoodTileContainer from './components/FoodTileContainer/FoodTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrdersContainer from './components/RecentOrders/RecentOrdersContainer';


function App() {
  return (
    <div className="App">
       <UpperNavBar/>
       <RecentOrdersContainer/>
      <FoodTileContainer />
     
    </div>
  );
}

export default App;
