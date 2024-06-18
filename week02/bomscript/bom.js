const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const newList = document.createElement("li");
const delButton = document.createElement('button');

newList.textContent= input.value;

delButton.textContent = "X";

newList.appendChild(delButton);

list.append(newList);




/*const chapter = document.createElement('h2');
const title = document.createElement('h2');


newList.appendChild(chapter);
newList.appendChild(title);
newList.appendChild(delButton);

newList.append(delButton, "Delete"); */