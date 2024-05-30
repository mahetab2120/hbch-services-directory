import React, { useState } from 'react'
import styles from '../navbar.module.css'
import { mic } from '../../data/jsondata';
import Searchbox from '../searchbox';


function Microbiology({onOpen}) {
  const [searchData, setSearchData] = useState('');
  const handleTestClick = (testData) => {
    onOpen(testData,'mic');
  }; const searchonData = (sValue) => {
    setSearchData(sValue);
  };

  const filteredData = mic.filter(item =>
    item.TEST_CODE.toLowerCase().includes(searchData.toLowerCase())||
    item.TEST_NAME.toLowerCase().includes(searchData.toLowerCase())
  );
  return (
    <div className={`${styles['insec5']+' mt-4 py-4 cont-box border'}`}>
      {/* <div className='flex w-full h-full gap-4 absolute'>
          <div className='w-1/2 h-5/6 my-auto overflow-hidden m-4 rounded-lg bg-white box-border relative'>
          <div className='inner-container flex flex-col cursor-pointer gap-2 bottom-14 text-sm text-white left-0 w-full overflow-y-auto p-4'>
              
                <div className=' flex gap-2'><div className='border rounded-md w-24 h-auto bg-tabColor5  p-2 font-medium border-tabColor5 items-center justify-center'>Test Code</div>
                <div className='border rounded-md bg-tabColor5 border-tabColor5 flex-1 h-auto p-2 font-medium items-center justify-center'>Test Name</div></div>
              
            </div>
            <div className='inner-container flex flex-col cursor-pointer gap-2 bottom-0 mb-64  left-0 w-full h-5/6 text-black overflow-y-auto px-4'>
              {mic.map((items) => (
                <div className=' flex gap-2' onClick={() => handleTestClick(items.TEST_CODE)}><div className='border rounded-md w-24 h-auto border-tabColor5 items-center justify-center '>{items.TEST_CODE}</div>
                <div className='border rounded-md border-tabColor5 flex-1 '>{items.TEST_NAME}</div></div>
              ))}
            </div>
          </div> */}
          <div className='w-1/2 h-full mx-auto overflow-hidden rounded-lg bg-white box-border'>
          <Searchbox searchOnChange={searchonData} />
          <div className='inner-container flex flex-col cursor-pointer gap-2 text-sm left-0 w-full overflow-y-auto px-4'>
            <div className='flex gap-2'>
              <div className='border rounded-md w-24 h-auto bg-tabColor5 text-white p-2 font-medium border-tabColor5 items-center justify-center'>Test Code</div>
              <div className='border rounded-md bg-tabColor5 text-white border-tabColor5 flex-1 h-auto p-2 font-medium items-center justify-center'>Test Name</div>
            </div>
          </div>
          <div className='inner-container flex flex-col cursor-pointer gap-2 my-4 left-0 w-full h-[80%] overflow-y-auto px-4'>
            {filteredData.map((item) => (
              <div className='flex gap-2' key={item['Sl. No.']} onClick={() => handleTestClick(item.TEST_CODE)}>
                <div className='border rounded-md w-24 h-auto border-tabColor5 items-center justify-center text-black'>{item.TEST_CODE}</div>
                <div className='border rounded-md border-tabColor5 flex-1 text-black'>{item.TEST_NAME}</div>
              </div>
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Microbiology