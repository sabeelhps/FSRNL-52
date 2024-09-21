import React, {useState} from 'react';
import useToggle from '../hooks/useToggle';

const Person = (props) => {

    const [name, setName] = useState(props.name);
    const [isHighlighted, toggleHighlighted] = useToggle(false);
    
    const onClickHandler = () => {
        // setName('Anonymous');
        toggleHighlighted();
    }

    return (
        <article onClick={onClickHandler} style={{border:'1px solid #ccc', padding:'1rem', width:'400px', borderRadius:'8px', marginBottom:'5px'}}>
            <h2 style={{ color: isHighlighted ? 'red': ''}}>Name: { name }</h2>
            <h3>Age: { props.age }</h3>
            <p>City: { props.city }</p>
        </article>
    )
}

export default Person