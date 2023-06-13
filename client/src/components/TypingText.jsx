import {useEffect} from 'react';
const TypingText = () => {

  useEffect(() => {
    runTyping();
    },[])

    
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 275;
        // var delta = 500 - Math.random() * 100;
      
        if (this.isDeleting) { delta = 125; }
        // if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      var runTyping = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
        document.body.appendChild(css);
      };



    return(
    <div className="RotatingText">
        <h1 style={{ fontFamily:"Raleway", color:"lightblue", fontWeight:"300", margin:"0.4em 0", fontSize:"3.5em"}}>The Coding Dojo Shelter: &nbsp; 
            <span
            style={{fontWeight:500, marginLeft:"-20px"}}
                class="txt-rotate"
                data-period="2000"
                data-rotate='["saving!", "adopting!", "caring!", "fun!"]'>
            </span>
        </h1>
    </div>
    )
}

export default TypingText