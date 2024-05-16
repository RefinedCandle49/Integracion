import { useState } from "react";
import './Calculator.css';

function Buttons(props){
    const[value, setValue] = useState('')
    return(
        <>
        <input type='button' className='button' value={props.name} onClick={() => props.onClick(props.name)}/>
        </>

    );
    
}

export default Buttons;