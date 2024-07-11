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



const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
// storing the array data into local storage as strings
    localStorage.setItem("products", JSON.stringify(products));

  let storedProduct = JSON.parse(localStorage.getItem("products"));
  //storedProduct.join(",");
  
  storedProduct.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent =product.name;
    const select = document.querySelector("#selector");
    select.appendChild(option);
  });

const button = document.querySelector("#post-review");
const form = document.querySelector("#form");

button.addEventListener('click',(review));


function review(){
    let reviewnum = localStorage.getItem("visitnumber") ||0;
    if (reviewnum !==0){
        reviewnum ++;
    }
    else reviewnum=1;

    localStorage.setItem("visitnumber", reviewnum);

    document.querySelector('main').innerHTML = `<p class="thank-you-message">Thank you! You have made ${reviewnum} reviews</p>`;

};



  
  

