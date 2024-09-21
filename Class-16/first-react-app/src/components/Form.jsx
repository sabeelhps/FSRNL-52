import React,{useRef} from 'react';

const Form = (props) => {

    const nameInpRef = useRef();
    const ageInpRef = useRef();
    const cityInpRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
    
        const newPerson = {
            name: nameInpRef.current.value,
            age: ageInpRef.current.value,
            city: cityInpRef.current.value
        }

        // console.log(newPerson);
        // Upward Pass
        props.addPerson(newPerson);
    }

  return (
      <form onSubmit={formSubmitHandler}>
          <span>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder='Name' ref={nameInpRef}/>
          </span>
          <span>
              <label htmlFor="age">Age</label>
              <input type="number" id="age" placeholder='Age' ref={ ageInpRef } />
          </span>
          <span>
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder='City' ref={cityInpRef}/>
          </span>
          <button type="submit">Add+</button>
    </form>
  )
}

export default Form