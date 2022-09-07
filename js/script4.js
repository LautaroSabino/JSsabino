const btnReceta = document.querySelector('#btnReceta');
const divMuestra = document.querySelector('#receta');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '75511ceb91mshc404a12bec1d553p160624jsn32e0fef6f7f1',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract?url=http%3A%2F%2Fwww.melskitchencafe.com%2Fthe-best-fudgy-brownies%2F', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// btnReceta.addEventListener('click', ()=>{
//     fetch('https://dev.kiwilimon.com/documentacion/recetas')
//     .then((response)=>response.json())
//     .then((data)=>{
//         crearH(data);
//     })
// })


