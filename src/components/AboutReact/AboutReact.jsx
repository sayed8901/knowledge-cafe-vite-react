import React from 'react';
import './AboutReact.css';

const AboutReact = () => {
    return (
        <div className='about-react'>
            <div className="info">
                <h2>Basic concepts About React</h2>
                <h4>Here I am going to discus about some basic concept of react fundamentals & ho react actually works under-the-hood.</h4>
            </div>
            <div className="description">
                <div>
                    <h3>What is the difference between props vs state?</h3>
                    <p>
                        The main difference between <b>state</b> & <b>props</b> is state is used to maintain data change within an component while props is used to receive data properties from its parent component to handle data transportation. 
                        <br />
                        Besides this, data can not be modified using props as it can only used to receive the data properties, but state is actually used to handle the changes of data in different state or situation.
                     </p>
                </div>
                <div>
                    <h3>How does useState work?</h3>
                    <p>
                        Anything on the web that could change is called state. 
                        <br />
                        In react, state is used for internal communication inside a component.  It is introduced in v16.8.
                        <br />
                        useState is a special react hook that allows us to track data change and also helps to handle it in different state or situation in an application.
                        <br />
                        useState requires <b>2 input value</b>, one is the variable where updated data will be stored & another one is a callback function. Generally the initial value of useState might be 0 or in some cases 1. 
                        <br />
                        Here is demo example of useState: const [count, setCount] = useState(5);
                    </p>
                </div>
                <div>
                    <h3>What is the purpose of useEffect other than fetching data.</h3>
                    <p>
                        The useEffect Hook allows us to perform <b>external side effects</b> in our components. It is often used along with useState and acts like co-worker to handle the data changes.
                        <br />
                        Except fetching data, useEffect can also be used to <b>directly updating the DOM, handle timers</b> & so on.</p>
                </div>
                <div>
                    <h3>How Does React actually work?</h3>
                    <p>
                        React is a Modular Component Library, modular focuses on <b>component based layout</b>.
                        <br />
                        Instead of manipulating the browser's DOM directly, React creates a replica of <b>virtual DOM</b> in the memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
                        <br />
                        React finds out what changes have been made, and <b>changes only what needs to</b> be changed.
                        <br />
                        React work based on <b>6 fundamental concepts</b>: 1. JSX, 2. Components, 3. Props, 4. Event Handlers, 5. State (useState) & 6. Data load (useEffect).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutReact;