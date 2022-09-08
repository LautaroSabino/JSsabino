const btnRec1 = document.querySelector('#btnRec1');



function cargarJson() {

	fetch('../lista.json')
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			listaHTML = '';
			data.forEach(function (lista) {
				listaHTML += `<li>${lista.nombre}</li>`
				listaHTML += `<li>${lista.ingredientes}</li>`
				listaHTML += `<li>${lista.preparacion}</li>`
			})
			document.getElementById('rec1').innerHTML = listaHTML;

		})
		.catch(err => console.error(err));

}

btnRec1.addEventListener('click', cargarJson)

