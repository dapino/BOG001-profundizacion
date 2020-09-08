//Sincronía (Paso a paso de un listado de cosas que tienen que pasar)

//Asincronía (Muchas cosas funcionando al mismo tiempo)

//Promesa (Una promesa resuelve algo asincrono, debe tener callbacks, 
//cuando hacen más de un callback CANCELEN! ) 

/*------ ¿Cómo hacer un huevito con yema blandita? -------*/

// 1. Tener un huevito ? siguiente :  ir a comprar
// 2. Calentar sartén antiadherente (Con aceitico/mantequilla/pam y una pizca de sal)
// 3. Romper el huevito (?)
// 4. Ponerlo en el sartén sin cáscara y sin estropear la yema.
// 5. Agregarle sal
// 6. Tapar el sartén
// 7. Esperar 3 minutos
// 8. Destapar, revisar y servir

const huevitoConCallbacks = (huevito = true, yemita = false) => {
	if(huevito) { 
		setTimeout(() => {
			console.log('Calentar sartén antiadherente con mantequilla');
			setTimeout(() => {
				console.log('Romper el huevito')	
				setTimeout(() => {
					console.log('Ponerlo en el sartén sin cáscara y sin estropear la yema');
					if (yemita){
							setTimeout(() => {
									console.log('Agregarle sal');
									setTimeout(() => {
											console.log('Tapar Sartén');
											setTimeout(() => {
													console.log('Esperar 3 minutos');
													setTimeout(() => {
															console.log('Destapar, revisar y servir');
													}, 1000);
											}, 3000);
									}, 1000);
							}, 1000);
					} else {
							console.log('Vamos a dárselo al hermano de Pau y llorar por no comer huevito');
							huevitoConCallbacks(true, true);
					} 
				}, 1000);
			}, 1000);
		}, 1000);	
	}
	console.log("Ir a comprar el huevito")	
}

const esperar = (time = 1000) => {
	return new Promise ((resolve) =>{
		setTimeout(()=>{
			resolve("Esperando un segundo... tic tac");
		});
	});
}
//Cosas chéveres para observar en el ejercicio y hacerse preguntas :D descomentar cada línea en orden, de a una en una
//console.log(esperar); ------->Debe indicarnos que en efecto cumple las condiciones de una promesa :D
//console.log(esperar()); ----->Debe ser una promesa pendiente ya que no se le ha dado manejo al resolve o reject
//console.log(esperar().then(a => {console.log(a)})); //-----> Estamos viendo la resolución de la promesa con el "then" estamos viendo el "entonces qué hace esa mondá"
																										//Se ejecuta diferente dentro del console.log, si vamos al

//Y qué pasa si la paso como una variable?
//const holongo = esperar().then(a => {console.log(a)});
//holongo; //Se resuelve la promesa! :D 


const siHayHuevitos = (huevito = true, tiempo = 1000) => {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if(huevito) {
				resolve("¡Sí, tenemos huevito!")
			}											
			reject(new Error("Se acabaron los huevitos"))
		}, tiempo)
	})
}

//siHayHuevitos().then((lobueno) => console.log(lobueno), (lorechaza) => console.log(lorechaza));
//siHayHuevitos().then((lobueno) => {console.log(lobueno)}).catch((e) => {console.log(e)});

const calentarSarten = (tiempo = 1000) => {
	return new Promise ((resolve)=> {
		setTimeout(() => {
			resolve("Calentar el sartén")
		}, tiempo)
	})
}

const yemitaHuevito = (yemita= false, tiempo = 1000) => {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if(yemita) {
				resolve("¡Agregarle sal!")
			}											
			reject(new Error("Darselo al hermano de Pau"))
		}, tiempo)
	})
}



const hacerUnHuevito = () => {
	siHayHuevitos().then((Hayhuevitos) => {
		console.log(Hayhuevitos);
		calentarSarten().then((HaySarten) =>{	
			console.log(HaySarten);
			yemitaHuevito().catch((HayError) => { console.log(HayError)});
		});
	});
}

hacerUnHuevito();


// romperHuevito();

// Implicit try…catch
// The code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection.

// For instance, this code:

// new Promise((resolve, reject) => {
//   throw new Error("Whoops!");
// }).catch(alert); // Error: Whoops!
// …Works exactly the same as this:

// new Promise((resolve, reject) => {
//   reject(new Error("Whoops!"));
// }).catch(alert); // Error: Whoops!
