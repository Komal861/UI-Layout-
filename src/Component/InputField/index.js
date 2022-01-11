import React from 'react'
import './index.css'

const Input =({label,placeholder,type}) =>{
    return (
        <div>
            <label className= 'labelStyle'><b>{label}</b></label>
            <input
                className='inputStyle'
                type={type}
                // name={name}
                placeholder={placeholder}
                // onChange={onChange}
                // value = {value}
                // required="required"
            />
        </div>
    )
}
export default Input
