import React, { useEffect, useState } from 'react';

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

        <section class="counters">
                    <div class="CounterContainer">

                        <div>
                            <i class="fab fa-youtube fa-4x"></i>
                            <div class="counter" data-target="812">0</div>
                            <h3>Animals Adopted</h3>
                        </div>
                        <div>
                            <i class="fab fa-twitter fa-4x"></i>
                            <div class="counter" data-target="1291">0</div>
                            <h3>Surgeries Performed</h3>
                        </div>
                        <div>
                            <i class="fab fa-facebook fa-4x"></i>
                            <div class="counter" data-target="322">0</div>
                            <h3>Pets Returned To Owners</h3>
                        </div>

                    </div>
                </section>


    )
}

export default Counter