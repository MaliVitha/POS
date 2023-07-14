
import './App.css';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';
import FoodTileContainer from './components/FoodTileContainer/FoodTileContainer';
import ItemTileContainer from './components/ItemTiles/ItemTileContainer';
import SideNav from './components/NavBar/SideNav/SideNav';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrdersContainer from './components/RecentOrders/RecentOrdersContainer';


function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <div className="left">
      <SideNav/>
      <RecentOrdersContainer />
      </div>
        <div className='center'>
          <FoodTileContainer />
          <ItemTileContainer/>
        </div>
        <div className="right">
        <CustomerDetails />
        </div>
   
   </div>
  );
}

export default App;
