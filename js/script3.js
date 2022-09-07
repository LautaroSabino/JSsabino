const btnTar1 = document.querySelector('#btnTar1');
const btnTar2 = document.querySelector('#btnTar2');
const btnTar3 = document.querySelector('#btnTar3');

const tar1 = document.querySelector('.tar1');
const tar2 = document.querySelector('.tar2');
const tar3 = document.querySelector('.tar3');

/*------------------------------------------------------------------------------------------------*/


btnTar1.addEventListener('click', () => {
    tar1.classList.add('visible')
    setTimeout(()=>{
        tar1.classList.remove('visible')
    },3000)
})


btnTar2.addEventListener('click', () => {
    tar2.classList.add('visible')
    setTimeout(()=>{
        tar2.classList.remove('visible')
    },3000)
})


btnTar3.addEventListener('click', () => {
    tar3.classList.add('visible')
    setTimeout(()=>{
        tar3.classList.remove('visible')
    },3000)
})

/*------------------------------------------------------------------------------------------------*/