import React from 'react';
import './index.css'

const Button =({value}) =>{
    return (
        <div>
            <button
                className='ButtonStyle'
                >
                {value}
                </button>
            
        </div>
    )
}
export default Button