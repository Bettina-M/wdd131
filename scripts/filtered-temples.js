let y = new Date().getFullYear();
document.querySelector('#currentYear').innerHTML= y;

const time = new Date();
let day = time.getDate();
let month = time.getMonth()+1;
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

const format = `Last modification:${day}/${month}/${y} ${hours}:${minutes}:${seconds}`;

document.querySelector( '#lastModified').innerHTML = format;

const navigation = document.querySelector('nav');
const menuElement = document.querySelector('#menu');

menuElement.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuElement.classList.toggle('open');
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015,June,7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020,May,2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974,November,19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986,January,10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983,December,2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
     templeName: "Albuquerque New Mexico",
     location:"Albuquerque, New Mexico ",
     dedicated:"2000,March,5",
     area:3181,
     imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/800x500/albuquerque-temple-lds-998219-wallpaper.jpg"
     },
    {
     templeName: "Barranquilla Colombia",
     location:"Barranquilla, Atlantico Colombia",
     dedicated:"2018,December,9",
     area:25349,
     imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/800x500/2-Barranquilla-Columblia-Temple-2135201.jpg"
    },

    {
     templeName: "Bern Switzerland",
     location:" Zollikofen Switzerland",
     dedicated:"1992,October,25",
     area:35546,
     imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/bern-switzerland-temple-lds-784290-wallpaper.jpg"
    }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    createTempleCard(temples);
});


  function createTempleCard(temples){
    const container = document.querySelector('.templeSection');
    container.innerHTML = '';
    temples.forEach(temple=>{
        let card = document.createElement('section');
        let img = document.createElement('img');
        let name =document.createElement('h3');
        let location= document.createElement('p');
        let dedication= document.createElement('p');
        let area = document.createElement('p');
        

        //add information to the elements created above
        name.textContent = temple.templeNamename;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class= "label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class= "label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt','Photo of Temple');
        img.setAttribute('loading', 'lazy');

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        

        container.appendChild(card);

    }

    );
  }

document.getElementById('home').addEventListener('click', () => {createTempleCard(temples);
document.getElementById('tab-heading').innerText="Home";});

document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() <= 1900);
    createTempleCard(oldTemples);
    document.getElementById('tab-heading').innerText = "Old Temples";
});

document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
    createTempleCard(newTemples);
    document.getElementById('tab-heading').innerText = "New Temples";
});

document.getElementById('large').addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
    document.getElementById('tab-heading').innerText = "Large Temples";
});
document.getElementById('small').addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area <= 10000);
    createTempleCard(smallTemples);
    document.getElementById('tab-heading').innerText = "Small Temples";
});