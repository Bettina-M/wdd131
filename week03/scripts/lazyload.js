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

