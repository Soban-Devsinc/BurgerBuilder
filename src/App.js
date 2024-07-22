import './App.css';
import { useState } from 'react';
import breadbun from './burgerimages/breadbun.svg'
import salad from './burgerimages/salad.svg'
import bacon from './burgerimages/bacon.svg'
import cheese from './burgerimages/cheese.svg'
import meat from './burgerimages/meat.svg'

function App() {

  const [vegData, setVegData] = useState([
    { name: 'Salad', cost: 2, count: 0 , img: salad},
    { name: 'Bacon', cost: 3, count: 0 , img: bacon},
    { name: 'Cheese', cost: 4, count: 0 , img: cheese},
    { name: 'Meat', cost: 5, count: 0 , img : meat}
  ]);

  const [cost, setCost] = useState(4);

  const incrementCost = (index) => {
    const newVegData = [...vegData];
    newVegData[index].count += 1;
    setVegData(newVegData);
    setCost(cost + newVegData[index].cost);
  };

  const decrementCost = (index) => {
    const newVegData = [...vegData];
    if (newVegData[index].count > 0) {
      newVegData[index].count -= 1;
      setVegData(newVegData);
      setCost(cost - newVegData[index].cost);
    }
  };

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

  const renderPhoto = () => {
    return vegData.map((item) =>
      Array(item.count).fill(null).map((_, i) => (
          <>
            <img src={item.img} alt={item.name} />
            <br />
          </>
      ))
    );
  };

  return (
      <>
      <div className='BurgerBuilder'>
        <h1>Welcome to Burger Builder</h1>
        <p className='Cost'><strong>Current Cost: </strong> ${cost} </p>
        {renderButtons()}
      </div>
      <hr></hr>
      <div className='BurgerBuilder'>
        <img src={breadbun} alt='topbun' height={200} width={200}></img> <br></br>
        {renderPhoto}
        <img src={breadbun} alt='bottombun' className='bottom-bun' height={200} width={200}></img>
      </div>

      </>
  );
}

export default App;
