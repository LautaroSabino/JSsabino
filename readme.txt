Buenas, Nati. Te dejo la explicación de mi proyecto. 

Mi idea fue hacer un simulador para mi negocio (en la vida real) donde el usuario pueda ver la carta, información sobre los alimentos, consultar a través de un formulario y hasta obtener recetas extraídas de un Json. 

Por ende, paso a explicar cada script. 

El index tiene linqueado "../js/script.js" y es la página principal donde el usuario piuede ver la lista (simulado) de los productos del local. Para ello utilicé una clase constructora, metodos específicos y funciones, además del eventListener. También le añadi un Toastify que te linkea con la página real de google. 

Luego está la page "Form" que está linkeada con "../js/script2.js", aquí está el formulario de contacto en el que aproveché para hacer dos funciones. En una guarda los datos en el local Storage y luego hay un botón para guardar el usuario también en el local Storage, pero solo guarda la info de usuario. Para ambos utilicé sweet alert 2 con sus métodos correspondientes. 

En la page "imagenes", linkeada con "../js/script3.js" utilicé una funcion con parametros que me permitió reducir mucho código, ya que antes habia hecho un addEventListener para cada card. Ahora lo hice con un onclick desde el html y utilicé los parametros. La idea de esta page fue jugar con el setTimeout, usando imágenes de las comidas que ofrezco en la lista del principio. 

Por último pero no menos importante (ah re), está la page "recetas" linkeada con "../js/script4.js" donde utilicé una mini baste de datos extraída de Json para aprender a usar el fetch (y como dato de color, te digo que me encantó jugar con eso y que me cayeron un poco las fichas con respecto a Json en general).

Decidí no linkear otros script en otras pages porque cada script trabaja sobre su pagina independientemente, sin usar variables de otros lados. Además que lo del import y export me voló la cabeza mal jajaja. 

Espero haya sido de utilidad esta explicación y espero aprobar con mi bessshho simulador (aunque sea super tranqui como dijiste XD)

Gracias totales, profe!