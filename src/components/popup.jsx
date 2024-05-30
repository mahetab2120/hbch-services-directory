import React, { useCallback, useEffect, useRef } from 'react'
import { Bioche } from '../data/bioche';
import { Cytho } from '../data/cytho';
import { Patho,hem, mic, mol, tra } from '../data/jsondata';

function Popup({onClose, testData, tabname}) {

    const popupRef = useRef(null);

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Enter') {
          onClose();
        } else if (event.key === 'Escape') {
          onClose();
        }
      }, [onClose]);
    
      useEffect(() => {
        const handleKeyDown = (event) => handleKeyPress(event);
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [handleKeyPress]);

    var alltestData = null
    if(tabname==='bio')
         alltestData = Bioche.find(item => item.Test_Code === testData);
    else if(tabname==='cyt')
        alltestData = Cytho.find(item => item.Test_Code === testData)
    else if(tabname==='pat')
            alltestData = Patho.find(item => item.Test_Code === testData)
    else if(tabname==='hem')
        alltestData = hem.find(item => item.Test_Code === testData)
    else if(tabname==='mic')
        alltestData = mic.find(item => item.TEST_CODE === testData)
    else if (tabname==='mol')
        alltestData = mol.find(item => item.Test_Code === testData)
    else if (tabname==='tra')
        alltestData = tra.find(item => item.Test_Code === testData)
    // 'h-screen w-full relative float-start z-20'
    //{`${styles['insec1']+' float-start z-20 !h-screen !w-full mt-4 cont-box border !relative' }`}

  return (
    <div ref={popupRef} className='h-screen w-full relative float-start z-20'>
        <div onClick={onClose} className='h-screen w-full bg-[#0F1729] opacity-90 z-10 backdrop-filter backdrop-blur-sm'></div>
        {/* <div className='h-5/6 w-1/2 absolute transform z-20 -translate-x-1/2 opacity-100 my-auto left-1/2 bg-slate-500'></div> */}
        <div className='absolute w-1/2 h-4/5 left-1/4 top-[10%] inset-0 flex items-center justify-center z-30'>
            <div className='w-full h-full rounded-md p-4 bg-slate-300 border-black text-black border-2 z-40'>
                <div className='flex h-full flex-col gap-2 inner-container p-2 overflow-auto '>
                    {Object.entries(alltestData).slice(1).map(([key,value])=>(<div className='flex gap-2'>
                        <div className='border p-2 rounded-sm w-[40%] border-black'>{key}</div>
                        <div className='border p-2 rounded-sm flex-1  border-black'>{value}</div>
                    </div>))}
                </div>
            </div>
  </div>
    </div>
  )
}

export default Popup