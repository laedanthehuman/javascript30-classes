function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key   = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransaction(e) {
    if(e.propertyName !=='transform'){
        return;
    }
    e.target.classList.remove('playing');
    
}

window.addEventListener('keydown',playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransaction));


