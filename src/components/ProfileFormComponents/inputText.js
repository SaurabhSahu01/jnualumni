import React from 'react'
const InpuText = (props) => {
    return ( 
        <div>
            <input 
            type="text" 
            name={props.name} 
            placeholder={props.placeholder} 
            className='h-11 w-full rounded-lg py-2 px-2 outline-none font-mono border-b-2 border-gray-400' 
            onChange={props.onChange} />
        </div>
     );
}
 
export default InpuText;