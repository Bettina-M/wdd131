let y = new Date().getFullYear();
document.querySelector('#currentYear').innerHTML=  `&copy; ${y}`;

const time = new Date();
let day = time.getDate();
let month = time.getMonth()+1;
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

const format = `Last modification:${day}/${month}/${y} ${hours}:${minutes}:${seconds}`;

document.querySelector( '#lastModified').innerHTML = format;


function calculateWindChill (temperature, windSpeed){
    if (temperature <= 10 && windSpeed > 4.8) {
        let windchill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windchill.toFixed(2);
    }
    return "N/A";
}

const temperature = 10; 
const windSpeed = 5;

document.getElementById('windchill').innerText = calculateWindChill(temperature, windSpeed);

