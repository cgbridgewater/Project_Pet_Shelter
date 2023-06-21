const EventsBanner = () => {


    let spans = document.querySelectorAll('.word span');
    spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
            e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('active');
        });
        // Initial animation
        setTimeout(() => {
            span.classList.add('active');
        }, 750 * (idx+1))
    });

    return(
        <div class="FlierBanner">
            <div class="word">
                <span>U</span>
                <span>P</span>
                <span>C</span>
                <span>O</span>
                <span>M</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
                <br className="mobile-only"  />
                <span>&nbsp;</span>
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span>S</span>
            </div>
        </div>
    )
}

export default EventsBanner