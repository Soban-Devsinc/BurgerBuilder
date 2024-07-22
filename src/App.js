import './App.css';
import { useState } from 'react';

function App() {
  // Use States
  const [cost, setCost] = useState(4);

  // Increment Cost Function
  const incrementCost = (value) => {
    setCost((cost) => cost + value);
  }

  // Decrement Cost Function
  const decrementCost = (value) => {
    setCost((cost) => cost - value);
  }

  // Veg Array
  const VegData = [
    { name: 'Salad', value: 2 },
    { name: 'Bacon', value: 3 },
    { name: 'Cheese', value: 4 },
    { name: 'Meat', value: 5 }
  ]

  // Rendering buttons
  const renderButtons = () => {
    return VegData.map((item, index) => (
      <div key={index}>
        {item.name}: ${item.value}
        <br /><br />
        <button onClick={() => incrementCost(item.value)}>Add</button>
        <button onClick={() => decrementCost(item.value)}>Remove</button>
        <br /><br />
      </div>
    ));
  };

  return (
    <div className='BurgerBuilder'>
      <h1>Welcome to Burger Builder</h1>
      <p className='Cost'><strong>Current Cost: </strong> ${cost} </p>
      {renderButtons()}

    </div>
  );
}

export default App;
