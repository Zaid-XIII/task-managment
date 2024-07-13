"use client";
import { useState } from "react";
import { FloatingLabel,Button,Card } from "flowbite-react";
import Dropdownitem from "./Dropdownitem";


function App() {
  const [items, setItems] = useState('');
  const [displayedValue, setDisplayedValue] = useState([]);
  const handleChange=(event)=>{
    const hello =event.target.value
    setItems(hello);

  }
  const appendItem=()=>{
      // Update the state to include the new item
      if (items !==''){
      setDisplayedValue([...displayedValue, items]);
  }}
  return (
    <div className="flex justify-center items-center h-screen">
        <Card className="max-w-sm">
    <div className="grid grid-flow-col grid-cols-3 justify-stretch space-x-4">

      <FloatingLabel value={items} onChange={handleChange} variant="outlined" label="Label" id='task-input' />
      <div className="">
      <Button as='span' onClick={appendItem}>Add Task</Button>
    </div>
    </div>
    <div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700" id='task-list'>
       {displayedValue.map((item, index) => (
          <li key={index} id='task-item' className="flex flex-wrap gap-4 justify-between">{index+1}-{item}
          <Dropdownitem className=''/></li>         ))}
          
    </ul>
    </div></Card>
    </div>
    
  );
}

export default App;
