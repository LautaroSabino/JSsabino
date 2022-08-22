const infoForm = document.querySelector('#formulario');

infoForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let name = document.querySelector('#nombre').value
    let firstName = document.querySelector('#apellido').value
    let number = document.querySelector('#numero').value
    let mensaje = document.querySelector('#mensaje').value

    const person = {

        name,

        firstName,

        number,

        mensaje

    }


    localStorage.setItem('data', JSON.stringify(person));

    const traerInfo = JSON.parse(localStorage.getItem('data'))

    console.log(traerInfo);

}




