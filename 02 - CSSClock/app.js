const secondHand = document.querySelector('.second-hand');
const minuhand   = document.querySelector('.min-hand');
const hourHand   = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360) +90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minus = now.getMinutes();
    const minusDegree = ((minus/60)*360) +90;
    minuhand.style.transform = `rotate(${minusDegree}deg)`;

    const hours = now.getHours();
    const hoursDegrees =((hours/12)*360) +90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate,1000);

setDate();