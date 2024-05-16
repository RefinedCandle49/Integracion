import './Revista.css';

function Revista(props){
    const handleClick = () => {
        alert(props.title);
    };

    return(
        <>
        <div className='border'>
            <img src={props.image} className="App-logo" alt="logo" />
            <div><h3>{props.title}</h3></div>
            <div>{props.description}</div>
            <button type='button' className='go'onClick={handleClick} >Go anywhere</button>
        </div>
            
        </>

    );
    
}

export default Revista;