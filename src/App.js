import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Food from './components/FoodCard';
const foodItems = [
  {
    name: "Veg Burger",
    price: 99,
    description: "A delicious burger with a juicy patty, lettuce, tomato, and cheese.",
    img: "burger",
    ratings: 4.6
  },
  {
    name: "Supreme Pizza",
    price: 280,
    description: "Classic Italian pizza with tomato, mozzarella, and basil.",
    img: "pizza",
    ratings: 4.0
  },
  {
    name: "Red sauce Pasta",
    price: 150,
    description: "Savory pasta with your choice of sauce and toppings.",
    img: "pasta",
    ratings: 3.2
  },
  {
    name: "Green Salad",
    price: 80,
    description: "Fresh and healthy salad with a variety of greens and toppings.",
    img: "salad",
    ratings: 4.5
  },
  {
    name: "Fresh Juice",
    price: 50,
    description: "Refreshing fruit juice to quench your thirst.",
    img: "juice",
    ratings: 4.4
  },
  {
    name: "Samosa",
    price: 20,
    description: "Spiced pastry filled with potatoes and peas, deep-fried to perfection.",
    img: "samosa",
    ratings: 4.6
  },
  {
    name: "Masla Dosa",
    price: 90,
    description: "Crispy South Indian crepe served with a variety of chutneys and sambar.",
    img: "dosa",
    ratings: 4.2
  },
  {
    name: "French Fries",
    price: 40,
    description: "Golden and crispy French fries, perfect as a side dish.",
    img: "fries",
    ratings: 4.1
  }
];

console.log(foodItems);

function App() {
  const [counter, setCounter] = useState(0)
  function incrementHandler() {
    
    setCounter(counter + 1)
  }
  return (
    <>

      {/* <div className="container">
        {
          foodItems.map((item)=>{
           return <Food price={item.price} title={item.name} img={item.img} desc={item.description} ratings={item.ratings} />
          })
        }

        
      </div> */}

      <div className='App'>
        <h1>This is a demo of UseState Hook</h1>
        <h1>{counter}</h1>
        <button onClick={incrementHandler} className='btn'>Click me</button>
      </div>




    </>
  );
}

export default App;
