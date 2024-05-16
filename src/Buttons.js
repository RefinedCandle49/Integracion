import { useState } from "react";
import './Calculator.css';

function Buttons(props){
    const[value, setValue] = useState('')
    return(
        <>
        <input type='text' value={value}/>
        <input type='button' className='button' value="1" onClick={e => setValue(value + e.target.value)}/>
        <input type='button' className='button' value="2" onClick={e => setValue(value + e.target.value)}/>
        <input type='button' className='button' value="+" onClick={e => setValue(value + e.target.value)}/>
        <input type='button' value="=" onClick={e => setValue(eval(value))}/>
        </>

    );
    
}

export default Buttons;