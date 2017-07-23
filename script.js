function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // jak wciśnie się inny przycisk niż podpisane
        audio.currentTime = 0; // przerywanie dźwięku innym
        audio.play(); // graj! :)
        key.classList.add('playing');
    }                        
    
    function removeTransition(e){
        if(e.propertyName !== 'transform') return; //przerywa jak zmiana w css nie dotyczy transformacji
        this.classList.remove('playing');
    }
    
    const keys =document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend',removeTransition));
    
    window.addEventListener('keydown', playSound);