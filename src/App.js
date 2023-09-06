import logo from './logo.svg';
import './App.css';
import Food from './components/FoodCard'
function App() {
  return (
    <>

      <div className="container">
        <Food title="Green Salad" img="salad" ratings="3.9" />
        <Food title="Veg Supreme Burger" img="burger" ratings="4.0" />
        <Food title="Masala Dosa" img="dosa" ratings="4.6"/>
      </div>
      

    </>
  );
}

export default App;
