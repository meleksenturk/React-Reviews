import React from 'react'
import '../css/personStyle.css'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
export const Person = ({image, job, text,nextPerson, previousPerson, randomPerson }) => {

    return (
        <div className='personInfo'>
            <img src={image} width={60} height={60} />
            <div>
                <h3>{job}</h3>
            </div>
            <div className='personText'>
                <p>{text}</p>
            </div>
            <div className='nextAndPrevious'>
                <button className='buttonAi' onClick={previousPerson}>
                    <AiFillCaretLeft size={50} />
                </button>
                <button className='buttonAi' onClick={nextPerson}>
                    <AiFillCaretRight size={50} />
                </button>
            </div>
            <div className='supriseDiv'>
                <button onClick={randomPerson} >
                    Suprise Me
                </button>
            </div>
        </div>
    )
}

export default Person;