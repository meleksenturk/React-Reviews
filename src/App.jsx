import { useState } from "react";
import data from './data.js'
import Person from './component/Person.jsx'
import React from 'react'
import './css/appStyle.css'

export const App = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data[index]);
  console.log(people)


  const nextPerson = () => {
    const newIndex = (index + 1) % data.length; // index değeri 0 olduğunda 1 arttırıp daha sonra mod aldığımızda arttırılmış index 
                                                //degerini elde ederiz.
    console.log(index)
    setIndex(newIndex)
    setPeople(data[newIndex])
  }

  const previousPerson = () => {
    const newIndex = ((index - 1) % data.length);
    if (index === 0) {
      const newIndex = data.length - 1; //index değeri 0 a eşit olduğunda datanın uzuluğunun bir eksiği dediğimizde 0 dan sonra
                                        // en sonki ögeye dönmüş oluruz.
      setIndex(newIndex);
      setPeople(data[newIndex]);
    }
    else {
      setIndex(newIndex);
      setPeople(data[newIndex]);
    }
  }
  
  const randomPerson = () => {
    const randomNumber = Math.random() * data.length; // random fonksiyonu 0 ile 1 arasında bir değer üretir.
                                                      //datanın uzunluğu ile çarpıp 0 ile datanın uzunluğu arasında bir değer üretmiş oluruz.
    const newIndex = Math.floor(randomNumber);
    setIndex(newIndex)
    setPeople(data[newIndex])
  }
  return (
    <div className="mainDiv">
      <div className="cardDiv">
        {/* {people.map((person) => {
          return (<Person key={person.id} {...person} />)
        })} */}

        <Person  {...people} nextPerson={nextPerson} previousPerson={previousPerson} randomPerson={randomPerson} />
      </div>
    </div>
  )
}


export default App;
