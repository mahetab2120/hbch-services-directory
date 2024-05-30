import React, { useState } from 'react';
import styles from '../navbar.module.css';
import { Bioche } from '../../data/bioche';
import Searchbox from '../searchbox';

function Biochemistry({ onOpen }) {
  const [searchData, setSearchData] = useState('');

  const handleTestClick = (testData) => {
    onOpen(testData, 'bio');
  };

  const searchonData = (sValue) => {
    setSearchData(sValue);
  };

  const filteredData = Bioche.filter(item =>
    item.Test_Code.toLowerCase().includes(searchData.toLowerCase())||
    item.Test_Name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className={`${styles['insec1']} mt-4 py-4 cont-box border `}>
      {/* <div className='flex w-full h-full gap-4 absolute'>
        <div className='w-1/2 h-5/6 my-auto overflow-hidden m-4 rounded-lg bg-white box-border relative'>
          <div className='inner-container flex flex-col cursor-pointer gap-2 bottom-14 text-sm left-0 w-full overflow-y-auto p-4'>
            <div className='flex gap-2'>
              <div className='border rounded-md w-24 h-auto bg-tabColor1 text-white p-2 font-medium border-tabColor1 items-center justify-center'>Test Code</div>
              <div className='border rounded-md bg-tabColor1 text-white border-tabColor1 flex-1 h-auto p-2 font-medium items-center justify-center'>Test Name</div>
            </div>
          </div>
          <div className='inner-container flex flex-col cursor-pointer gap-2 bottom-0 mb-64 left-0 w-full h-5/6 overflow-y-auto px-4'>
            {Bioche.map((item) => (
              <div className='flex gap-2' key={item['Sl. No.']} onClick={() => handleTestClick(item.Test_Code)}>
                <div className='border rounded-md w-24 h-auto border-tabColor1 items-center justify-center text-black'>{item.Test_Code}</div>
                <div className='border rounded-md border-tabColor1 flex-1 text-black'>{item.Test_Name}</div>
              </div>
            ))}
          </div>
        </div> */}
        <div className='w-1/2 h-full mx-auto overflow-hidden rounded-lg bg-white box-border'>
          <Searchbox searchOnChange={searchonData} />
          <div className='inner-container flex flex-col cursor-pointer gap-2 text-sm left-0 w-full overflow-y-auto px-4'>
            <div className='flex gap-2'>
              <div className='border rounded-md w-24 h-auto bg-tabColor1 text-white p-2 font-medium border-tabColor1 items-center justify-center'>Test Code</div>
              <div className='border rounded-md bg-tabColor1 text-white border-tabColor1 flex-1 h-auto p-2 font-medium items-center justify-center'>Test Name</div>
            </div>
          </div>
          <div className='inner-container flex flex-col cursor-pointer gap-2 my-4 left-0 w-full h-[80%] overflow-y-auto px-4'>
            {filteredData.map((item) => (
              <div className='flex gap-2' key={item['Sl. No.']} onClick={() => handleTestClick(item.Test_Code)}>
                <div className='border rounded-md w-24 h-auto border-tabColor1 items-center justify-center text-black'>{item.Test_Code}</div>
                <div className='border rounded-md border-tabColor1 flex-1 text-black'>{item.Test_Name}</div>
              </div>
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Biochemistry;


// import React, { useState } from 'react'
// import styles from '../navbar.module.css'
// import { dummydata } from '../../data/navdet'
// import { Bioche } from '../../data/bioche'
// import Searchbox from '../searchbox'

// function Biochemistry({onOpen}) {
//   const [searchData,setSearchData]=useState('')

//   const handleTestClick = (testData) => {
//     onOpen(testData,'bio');
//   };
//   const searchOnChage = (sValue) => {
//     setSearchData(sValue)
//   }
//   const filteredData = Bioche.filter(item => item.Test_Code.toLowerCase().includes(searchData.toLowerCase()))
//   console.log(filteredData,searchData)

//   return (
//     <div className={`${styles['insec1']+' mt-4 cont-box border relative' }`}>
//     {/* <div className='flex w-full h-full gap-4 absolute'>
//       <div className='w-1/2 h-5/6  my-auto overflow-hidden m-4 rounded-lg bg-white box-border relative py-4'><div className='inner-container  h-full w-full absolute overflow-y-auto box-border p-2.5'>{dummydata.map(([key,value])=>(
//         <div>{key}:{value}</div>
//       ))}</div></div>
//       <div className='w-1/2 h-5/6 m-4 my-auto rounded-lg bg-white'></div>
//     </div> */}
//       <div className='flex w-full h-full gap-4 absolute'>
//           <div className='w-1/2 h-5/6 my-auto overflow-hidden m-4 rounded-lg bg-white box-border relative'>
//           <div className='inner-container flex flex-col cursor-pointer gap-2 bottom-14 text-sm  left-0 w-full overflow-y-auto p-4'>
              
//                 <div className=' flex gap-2'><div className='border rounded-md w-24 h-auto bg-tabColor1 text-white p-2 font-medium border-tabColor1 items-center justify-center'>Test Code</div>
//                 <div className='border rounded-md bg-tabColor1 text-white border-tabColor1 flex-1 h-auto p-2 font-medium items-center justify-center'>Test Name</div></div>
              
//             </div>
//             <div className='inner-container flex flex-col cursor-pointer gap-2 bottom-0 mb-64  left-0 w-full h-5/6  overflow-y-auto px-4'>
//               {Bioche.map((items) => (
//                 <div className=' flex gap-2' onClick={() => handleTestClick(items.Test_Code)}><div className='border rounded-md w-24 h-auto border-tabColor1 items-center justify-center text-black'>{items.Test_Code}</div>
//                 <div className='border rounded-md border-tabColor1 flex-1 text-black'>{items.Test_Name}</div></div>
//               ))}
//             </div>
//           </div>
//           <div className='w-1/2 h-5/6 my-auto overflow-hidden m-4 rounded-lg bg-white box-border relative'>
            
//           <Searchbox searchOnChage={searchOnChage}/>



//           <div className='inner-container flex flex-col cursor-pointer gap-2 text-sm  left-0 w-full overflow-y-auto px-4'>
              
//                 <div className=' flex gap-2'><div className='border rounded-md w-24 h-auto bg-tabColor1 text-white p-2 font-medium border-tabColor1 items-center justify-center'>Test Code</div>
//                 <div className='border rounded-md bg-tabColor1 text-white border-tabColor1 flex-1 h-auto p-2 font-medium items-center justify-center'>Test Name</div></div>
              
//             </div>
//             <div className='inner-container flex flex-col cursor-pointer gap-2 mb-2  left-0 w-full h-auto overflow-y-auto p-4'>
//               {filteredData.map(([key, value]) => (
//                 <div className=' flex gap-2'><div className='border rounded-md w-24 h-auto border-tabColor1 items-center justify-center text-black'>{key}</div>
//                 <div className='border rounded-md border-tabColor1 flex-1 text-black'>:{value}</div></div>
//               ))}
//             </div>
//           </div>
//       </div>


//     </div>
//   )
// }

// export default Biochemistry