
import './Calculator.css';

function Buttons(props){
    return(
        <>
        <input type='button' className='button' value={props.name} />
        </>

    );
    
}

export default Buttons;