
import './App.css';
import FoodTileContainer from './components/FoodTileContainer/FoodTileContainer';
import SingleItem from './components/ItemTiles/SingleItem';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrdersContainer from './components/RecentOrders/RecentOrdersContainer';


function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <RecentOrdersContainer/>
      <FoodTileContainer />
     <SingleItem/>
   </div>
  );
}

export default App;
