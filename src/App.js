import './App.css';
import { useState } from 'react';
import breadbun from './burgerimages/breadbun.svg'
import salad from './burgerimages/salad.svg'
import bacon from './burgerimages/bacon.svg'
import cheese from './burgerimages/cheese.svg'
import meat from './burgerimages/meat.svg'

function App() {
  // VegData
  const [vegData, setVegData] = useState([
    { name: 'Salad', cost: 2, count: 0 , img: salad},
    { name: 'Bacon', cost: 3, count: 0 , img: bacon},
    { name: 'Cheese', cost: 4, count: 0 , img: cheese},
    { name: 'Meat', cost: 5, count: 0 , img : meat}
  ]);

  // Use state for cost
  const [cost, setCost] = useState(4);

  // Increment Cost and Count Function
  const incrementCost = (index) => {
    const newVegData = [...vegData];
    newVegData[index].count += 1;
    setVegData(newVegData);
    setCost(cost + newVegData[index].cost);
    console.log(newVegData)
  };

  // Decrement Cost and Count Function
  const decrementCost = (index) => {
    const newVegData = [...vegData];
    if (newVegData[index].count > 0) {
      newVegData[index].count -= 1;
      setVegData(newVegData);
      setCost(cost - newVegData[index].cost);
      console.log(newVegData)
    }
  };

  // Rendering buttons
  const renderButtons = () => {
    return vegData.map((item, index) => (
      <>
      {item.name}: ${item.cost} (Count: {item.count})
        <br /><br />
        <button onClick={() => incrementCost(index)}>Add</button> &nbsp;
        <button onClick={() => decrementCost(index)}>Remove</button>
        <br /><br />
      </>

    ));
  };

  // Rendering Photo
  const renderPhoto = () => {
    return vegData.map((item, index) =>
      Array(item.count).fill(null).map((_, i) => (
        <div key={`${index}-${i}`}>
          <img src={item.img} alt={item.name} />
          <br />
        </div>
      ))
    );
  };

  return (

    <div className='container'>

      <div className='BurgerBuilder'>
        <h1>Welcome to Burger Builder</h1>
        <p className='Cost'><strong>Current Cost: </strong> ${cost} </p>
        {renderButtons()}
      </div>
      <div className='BurgerBuilder2'>
        <img src={breadbun} alt='topbun' height={200} width={200}></img> <br></br>
        {renderPhoto()}
        <img src={breadbun} alt='bottombun' className='bottom-bun' height={200} width={200}></img>
      </div>

    </div>
  );
}

export default App;
