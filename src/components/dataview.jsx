
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Searchbox from './searchbox'
import { Bioche } from '../data/bioche'
import { Cytho } from '../data/cytho';
import { Patho,hem, mic, mol, tra } from '../data/jsondata';


function Dataview({activeTab, onOpen}) {
    console.log(activeTab)
    const [searchData, setSearchData] = useState('');
  const handleTestClick = (testData) => {
    onOpen(testData,'tra');}
    const searchonData = (sValue) => {
      setSearchData(sValue);
    };
  
    const filteredData = tra.filter(item =>
      item.Test_Code.toLowerCase().includes(searchData.toLowerCase())||
      item.Test_Name.toLowerCase().includes(searchData.toLowerCase())
    );

  return (
    <div className='w-1/2 h-full  mx-auto overflow-hidden rounded-lg bg-white box-border'>
          <Searchbox searchOnChange={searchonData} />
          <div className='inner-container flex flex-col cursor-pointer gap-2 text-sm left-0 w-full overflow-y-auto px-4'>
            <div className='flex gap-2'>
              <div className='border rounded-md w-24 h-auto bg-tabColor7 text-white p-2 font-medium border-tabColor7 items-center justify-center'>Test Code</div>
              <div className='border rounded-md bg-tabColor7 text-white border-tabColor7 flex-1 h-auto p-2 font-medium items-center justify-center'>Test Name</div>
            </div>
          </div>
          <div className='inner-container flex flex-col cursor-pointer gap-2 my-4 left-0 w-full h-[80%] overflow-y-auto px-4'>
            {filteredData.map((item) => (
              <div className='flex gap-2' key={item['Sl. No.']} onClick={() => handleTestClick(item.Test_Code)}>
                <div className='border rounded-md w-24 h-auto border-tabColor7 items-center justify-center text-black'>{item.Test_Code}</div>
                <div className='border rounded-md border-tabColor7 flex-1 text-black'>{item.Test_Name}</div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Dataview