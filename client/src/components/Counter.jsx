import { useEffect } from 'react';
import TypingText from './TypingText';

const Counter = () => {

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const speed = 100; // The lower the slower the increment change is
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                // Lower inc to slow and higher to slow
                const inc = Math.round(target / speed);
                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter
                    counter.innerText = count + inc;
                    // Call function every ms
                    setTimeout(updateCount, 50); // speed controlled on time out call
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    },[])

    return(
        <section className="counters">
            {/* typing text insert */}
            <TypingText/>
            {/* counting container */}
            <div className="CounterContainer">
                {/* Counter box 1 */}
                <div className='CounterBox'>
                    <i className="fab fa-youtube fa-4x"></i>
                    <div className="counter" data-target="812">0</div>
                    <p style={{color:"lightblue", fontWeight:"bold"}}>Animals Adopted</p>
                </div>
                {/* Counter box 2 */}
                <div className='CounterBox'>
                    <i className="fab fa-twitter fa-4x"></i>
                    <div className="counter" data-target="1291">0</div>
                    <p style={{color:"lightblue", fontWeight:"bold"}}>Surgeries Performed</p>
                </div>
                {/* Counter box 3 */}
                <div className='CounterBox'>
                    <i className="fab fa-facebook fa-4x"></i>
                    <div className="counter" data-target="407">0</div>
                    <p style={{color:"lightblue", fontWeight:"bold"}}>Reunited With Owners</p>
                </div>
            </div>
        </section>
    )
}

export default Counter