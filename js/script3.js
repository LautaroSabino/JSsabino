

function expandImg(id) {
    let element = document.querySelector(`.${id}`);
    
    element.classList.add('visible')
    setTimeout(()=>{
        element.classList.remove('visible')
    },3000)

}

