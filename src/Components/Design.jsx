import React from 'react'
import './Design.css'
import {
    Division,
    Multiply,
    Addition,
    Subtract
} from './Functions'

function Content() {
    return (
        <div className='Border'>
            <div className='content'>
                <div className='headingframe'>
                    <p className='Heading'>Calculator</p>
                </div>
                <div className='downcontent'>
                    <div className='padding'>
                        <div className='Value'>
                            <input type='number' placeholder='Enter Value' id='value-1' className='Value-in' />
                        </div>
                        <div className='Value2'>
                            <input type='number' placeholder='Enter Value' id='value-2' className='Value-in' />
                        </div>

                        {/* Buttons */}


                        <React.Fragment>
                            <button onClick={Division} className='buttons' id='Buttons-D'>Divide ➗</button>
                            <button onClick={Multiply} className='buttons' id='Buttons-M'>Multiply ✖</button>
                            <button onClick={Addition} className='buttons' id='Buttons-A'>Add ➕</button>
                            <button onClick={Subtract} className='buttons' id='Buttons-S'>Subtract ➖</button>
                        </React.Fragment>

                        {/* Result Feild */}
                        <div id='resultdiv'>
                            <p id='result' type='number' placeholder='Result'>Result</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export { Content };