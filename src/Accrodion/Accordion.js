import React from 'react'
import './Accordion.scss';

export default function Accordion({ answer, question, setActive, active }) {


    const accordionHandler = () => {
        setActive(question)
    }
    return (
        <>
            <div className='accordion'>
                <div onClick={accordionHandler} className='accordion-header'>
                    {question}
                    {active === question ? <svg style={{ transform: 'rotate(180deg)' }} xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" class="fill-current">
                        <path fill-rule="evenodd" d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" class="fill-current">
                        <path fill-rule="evenodd" d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                    </svg>}
                </div>
                {active === question ? <div className='accordion-body-open'>
                    {answer}
                </div> : <div className='accordion-body'>
                    {answer}
                </div>
                }
            </div>
            <div className='line'></div>
        </>
    )
}
