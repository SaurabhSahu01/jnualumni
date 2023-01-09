import React from 'react'
const InputSelect = (props) => {
    return (
        <div>
            <select 
                onClick={(e) => { props.onChange(e) }}
                defaultValue={props.options[0]}
                className="h-11 w-full rounded-lg py-2 px-2 outline-none font-mono border-b-2 border-gray-400" >
                <option value=''></option>
                {
                    (props.options).map(optionName => {
                        return (
                            <option value={optionName[0]}>{optionName[1]}</option>
                        )
                    }
                    )
                }
            </select>
        </div>
    );
}

export default InputSelect;