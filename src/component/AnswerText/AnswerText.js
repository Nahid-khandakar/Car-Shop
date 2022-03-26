import React from 'react';
import './AnswerText.css'


const AnswerText = () => {
    return (
        <div className='container-fluid bg-dark p-3  answerText-style'>

            <div className='border border-danger p-3 rounded'>
                <h3 className='text-danger'>What is the difference between state and props in React?</h3>
                <br />
                <p className='text-light'> <span className='text-warning'>PROPS:</span>  Props (short for properties) are a Component's configuration.Props are read-only components. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components.it make components reusable.</p>
                <p className='text-light'><span className='text-warning'>STATE:</span> The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.A Component manages its own state internally.	States can be used for rendering dynamic changes with the component.it cannot make components reusable.</p>

            </div>

            <div className='border border-danger p-3 rounded mt-3' >
                <h3 className='text-danger'>How useState work ?</h3>

                <p className='text-white'>useState is a hook .Returns a stateful value, and a function to update it.During the initial render, the returned state is the same as the value passed as the first argument .The setState function is used to update the state. It accepts a new state value and  re-render of the component.During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.If the new state is computed using the previous state, it pass a function to setState. The function will receive the previous value, and return an updated value. </p>
            </div>

        </div>
    );
};

export default AnswerText;