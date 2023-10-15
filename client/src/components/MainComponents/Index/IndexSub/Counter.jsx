import './Counter.css';
import { useEffect } from 'react';
import TypingText from './TypingText';

const Counter = () => {

    useEffect(() => {
        const counters = document.querySelectorAll('.Counter');
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
        <section className="Counters">
            {/* typing text insert */}
            <TypingText/>
            {/* counting container */}
            <div className="CounterContainer">
                {/* Counter box 1 */}
                <div className='CounterBox'>
                    <div className="Counter" data-target="812">0</div>
                    <p className='Counter-text'>Animals Adopted</p>
                </div>
                {/* Counter box 2 */}
                <div className='CounterBox'>
                    <div className="Counter" data-target="1291">0</div>
                    <p className='Counter-text'>Surgeries Performed</p>
                </div>
                {/* Counter box 3 */}
                <div className='CounterBox'>
                    <div className="Counter" data-target="407">0</div>
                    <p className='Counter-text'>Reunited With Owners</p>
                </div>
            </div>
        </section>
    )
}

export default Counter