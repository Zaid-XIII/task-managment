"use client";
import { useState } from "react";
import { Dropdown } from "flowbite-react";
//make dropdown and indicator
const Indicator = ({ selectedOption }) => {
  // Define dynamic styles based on the selected option
  let classN;
  let optionText;
  let classB;
  switch (selectedOption) {
    case "Not Started":
      classN = "inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-900 dark:text-gray-300";
      optionText = " Not Started";
      classB="w-2 h-2 mx-1 bg-gray-500 rounded-full";
      break;
    case "In Progress":
      classN = "inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300";
      optionText = " In Progress";
      classB=" w-2 h-2 mx-1 bg-blue-600 rounded-full";
      break;
    case "Done":
      classN = "inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300";
      optionText = " Done";
      classB="w-2 h-2 mx-1 bg-green-500 rounded-full";
      break;
    default:
      classN = "inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-900 dark:text-gray-300";
      optionText = " Not Started";
      classB="w-2 h-2 mx-1 bg-gray-500 rounded-full";
  }
return(
  <span className={classN}>
                <span className={classB}></span>
               {optionText}

            </span>

)
}
  
function Dropdownitem(){
  const [selectedOption, setSelectedOption] = useState(""); // Initialize state with an empty string

return(
<>
<div className="flex flex-wrap gap-4 justify-between ">
<Indicator selectedOption={selectedOption || ""}/>
<Dropdown label="" placement="right-start" inline className="justify-self-end">
      <Dropdown.Item onClick={() => setSelectedOption('Done')}>Done</Dropdown.Item>
      <Dropdown.Item onClick={() => setSelectedOption('In Progress')} >In Progress</Dropdown.Item>
      <Dropdown.Item onClick={() => setSelectedOption('Not Started')}>Not Started</Dropdown.Item>
    </Dropdown>
    </div>
      </>
)
}
export default Dropdownitem;
