const info1 = document.querySelector('.info-1');
const input = document.querySelector('.first__input');
const addBtn = document.querySelector('.add');

const groceryItems = document.querySelector('.grocery-items');
const removeAllBtn = document.querySelector('.remove');


addBtn.addEventListener('click',addItem);
addBtn.addEventListener('submit',addItem);
window.addEventListener('load',()=>{
    let strItems = JSON.parse(localStorage.getItem('groceryList'));
    strItems.forEach(curItem => add(curItem));
});

removeAllBtn.addEventListener('click',removeList);
groceryItems.addEventListener('click',removeSingle);

 
function addItem(e){
    e.preventDefault();
    let value = input.value;

    if (value){
        add(value);

        infoUpdate('success',`${value} was added successfully`);
        storageAdd(value);
    }
    else{
        infoUpdate('alert','Please add a value');
    }

    input.value = "";
}

function add(value){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<h1 class="item__title">${value}</h1>
                            <a href="#" class="delete">&Cross;</a>`;
        groceryItems.appendChild(newItem);
}

function infoUpdate (cls,message){
    info1.classList.add(cls);
    info1.textContent = message;
    setTimeout(()=>{
        info1.classList.remove(cls);
        info1.textContent = '';
    },3000)
}

function storageAdd(value){
    let storage;
    if(localStorage.getItem('groceryList')) storage = JSON.parse(localStorage.getItem('groceryList'));
    else storage = [];
    storage.push(value);
    localStorage.setItem('groceryList',JSON.stringify(storage));
}

function removeList(e){
    const items = groceryItems.querySelectorAll('.item');
    items.forEach(cur => groceryItems.removeChild(cur));
    
    let storage = JSON.parse(localStorage.getItem('groceryList'));
    storage = [];
    localStorage.setItem('groceryList',JSON.stringify(storage));
}

function removeSingle(e){
    if(e.target.classList.contains('delete')){
        let item = e.target.parentElement;
        groceryItems.removeChild(item);
        
        storageRemoveSingle(item.firstChild.textContent);
    }
}

function storageRemoveSingle(textVal){
    let storage = JSON.parse(localStorage.getItem('groceryList'));
    let index = storage.indexOf(textVal);
    storage.splice(index,1);
    localStorage.setItem('groceryList',JSON.stringify(storage));
}