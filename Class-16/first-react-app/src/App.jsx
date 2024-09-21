import './App.css';
import Person from './components/Person';
import Form from './components/Form';
import { useState } from 'react';
import useToggle from './hooks/useToggle';

function App() {

  const todos = ['Buy Groceries', 'Go to Gym', 'Swimming', 'Learn Web', 'Watch Movies'];


  const initialPersons = [
    {
      name: 'Max',
      age: 23,
      city: "New Delhi"
    },
    {
      name: 'John',
      age: 24,
      city: "New York"
    },
    {
      name: 'Mike',
      age: 25,
      city: "Mumbai"
    },
    {
      name: 'ABC',
      age: 26,
      city: "Chennai"
    },
    {
      name: 'DEF',
      age: 27,
      city: "Noida"
    },
  ];

  const [persons, setPersons] = useState(initialPersons);

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  }

  const firstName = "Max";
  const randomNum = Math.floor(Math.random() * 10) + 1;

  let element = null;

  if (randomNum < 5) {
    element = <p>Random number is less than 5!</p>
  } else {
    element = <p>This time it is more than or equals to 5!!!</p>
  }


  // const [isHappy, setIsHappy] = useState(true);

  // const toggleHappyHandler = () => {
  //   setIsHappy(!isHappy);
  // }

  const [isHappy, toggleHappy] = useToggle(true);

  return <section>

    <h1>First React App</h1>
    <h2>My Name is {firstName}</h2>
    <h2 onClick={toggleHappy}> { isHappy ? '😃' : '😢' }</h2>
    <h2>My Fav random number : {randomNum}</h2>
    {element}
    {todos}
    <h2>Sum of 1,2 and 3 is {1 + 2 + 3}</h2>
    {randomNum % 2 == 0 ? <h3>Even number</h3> : <h3>Odd Number</h3>}
    { randomNum ===7 && <img src="https://media3.giphy.com/media/6brH8dM3zeMyA/200w.gif?cid=6c09b952l1cg33sx0d68rnqcphyvc0jc36m4mtswznw2tf94&ep=v1_gifs_search&rid=200w.gif&ct=g" alt='This is a gifß' />}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste repellendus ipsam maiores. Porro neque a pariatur non quaerat perspiciatis necessitatibus commodi quia molestias illo. Aliquid dolorum architecto vel quo!</p>
    <ul>
      {
        todos.map((todo, idx) => {
          return <li key={idx}>{todo}</li>
        })
      }
    </ul>

    <section>
      <Form addPerson={addPerson} />

      {
        persons.map((person, idx) => {
          return <Person
            key={idx}
            name={person.name}
            age={person.age}
            city={person.city}
          />
        })
      }
    </section>
    
   
  </section>
}

export default App
