let y = new Date().getFullYear();
document.querySelector('#currentYear').innerHTML= y;

const time = new Date();
let day = time.getDate();
let month = time.getMonth()+1;
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

const format = `Last modification:${day}/${month}/${y}`;

document.querySelector( '#lastModified').innerHTML = format;

    const options =[{id:'daily'}, {id:'weekly'}, {id:'monthly'}];
    //store array to local storage

    localStorage.setItem("options", JSON.stringify(options));
    //retrieve the stored data
    let storedOptions= JSON.parse(localStorage.getItem("options"));

function DisOpt(){
    storedOptions.forEach(opt => {
        let option = document.createElement('option')
        option.textContent =opt.id;
        const select = document.querySelector('#frequency');
        select.appendChild(option);

        });
}

DisOpt();




function displaytext(event){
    event.preventDefault();
    let name= document.getElementById('person-name').value;
    let email = document.getElementById('email').value;
    let frequency = document.getElementById('frequency').value;

    let details= {
        name: name,
        email: email,
        frequency: frequency

    };

    localStorage.setItem('details', JSON.stringify(details));

    document.getElementById('form').style.display='none';
    document.getElementById('demo').textContent = `Hooray! Thank you ${name} for subscribing.`;
}

const button = document.getElementById('submit');

button.addEventListener('click', displaytext);