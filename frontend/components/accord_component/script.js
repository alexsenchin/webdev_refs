'use strict';
console.log('script')
const itemEl1 = document.querySelector('.item-1')
const itemEl2 = document.querySelector('.item-2')
const itemEl3 = document.querySelector('.item-3')
const itemEl4 = document.querySelector('.item-4')
const itemEl5 = document.querySelector('.item-5')

const setListener = (element, type, handler) => {
    if(!element) {
        return;
    }
    element.addEventListener(type, handler);
    return ()=>{
        element.removeEventListener(type, handler)
    };
}

setListener(itemEl1, 'click', () => {
    itemEl1.classList.toggle('open');
})
setListener(itemEl2, 'click', () => {
    itemEl2.classList.toggle('open');
})
setListener(itemEl3, 'click', () => {
    itemEl3.classList.toggle('open');
})
setListener(itemEl4, 'click', () => {
    itemEl4.classList.toggle('open');
})
setListener(itemEl5, 'click', () => {
    itemEl5.classList.toggle('open');
})