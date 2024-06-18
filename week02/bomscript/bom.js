function clickEvent(){
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.addEventListener('click', function(){

    if(input.value.trim()!== ''){
    input.focus();
    const newList = document.createElement("li");
    const delButton = document.createElement('button');

    newList.textContent= input.value;

    delButton.textContent = "X";

    newList.appendChild(delButton);

    list.append(newList);

    delButton.addEventListener('click', function(){
        list.removeChild(newList);
        input.focus();

        input.value = '';
});
input.focus();
}
});
}