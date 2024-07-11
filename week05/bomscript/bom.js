
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getchaptersList() || []; //retrieving previous data if null create an empty array

chaptersArray.forEach(chapter=>{ //iterate through the array, add the items to the array
    displayList(chapter)
});

button.addEventListener('click', function(){

    if(input.value.trim()!== ''){
    displayList(input.value)
    
    chaptersArray.push(input.value); //adding our input to the array

    setChapterList();//function for setting/sending the items to the local storage

    input.value =='';
    input.focus();
    }
});
    
function displayList(item){
    let newList = document.createElement("li");
    let delButton = document.createElement('button');

    newList.textContent= item;

    delButton.textContent = "X";

    newList.appendChild(delButton);

    list.append(newList);

    delButton.addEventListener('click', function(){
        list.removeChild(newList);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList(){
    localStorage.setItem("BOM List", JSON.stringify(chaptersArray));
}

function getchaptersList(){
    return JSON.parse(localStorage.getItem("BOM List"));

}

function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length-1);
    chaptersArray = chaptersArray.filter((item)=> item!==chapter);
    setChapterList();
}


