(function(){
    // SELECTORS
    const refresh = document.querySelector('.refresh');
    const addBtn = document.querySelectorAll('.random-color__add');
    const removeAll = document.querySelector('.remove__btn');

    const randColBlock = document.querySelectorAll('.random-color');
    const slots = document.querySelectorAll('.slot__item');


    // EVENT LISTENERS
    document.addEventListener('DOMContentLoaded',function(){
        refresh.addEventListener('click',addColors);
        addBtn.forEach(item => item.addEventListener('click',addToSlot));
        slots.forEach(slot => slot.addEventListener('click',clearSlot));
        removeAll.addEventListener('click',delSlotCont);
    });

    // FUNCTIONS
    function addColors(){
        randColBlock.forEach(item =>{
            if(!item.classList.contains('visible')) item.classList.add('visible');
            
            item.style.backgroundColor = randomColor(); 
        });
    }
    
    function randomColor(){
        return `rgba(${Math.floor(Math.random() * 255)},
                    ${Math.floor(Math.random() * 255)},
                    ${Math.floor(Math.random() * 255)},
                    ${Math.random().toFixed(2)})`;
    }

    function addToSlot(e){
        // Taking the slot and color from the item.
        const findSlot = this.dataset.slot;
        const color = this.parentElement.style.backgroundColor;
        
        slots.forEach(slot => {
            if(slot.dataset.id === findSlot){
                 slot.style.backgroundColor = color;
                 slot.innerHTML = `<span class="slot__clear">Clear Slot</span>
                                    <span class="slot__value">${color}</span>`;
            }
        });
    }

    function clearSlot(e){
        let target = e.target;
        if(target.className === 'slot__clear'){
            target.parentElement.style.backgroundColor = 'transparent';
            target.parentElement.innerHTML = '';
        }
    }   

    function delSlotCont(){
        slots.forEach(slot =>{
            slot.style.backgroundColor = 'transparent';
            slot.innerHTML = '';
        });
    }

})();