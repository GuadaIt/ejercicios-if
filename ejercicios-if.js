///////////////////////////////////////////////EJERCICIO 1
let nombreDeUsuario = "AdaLove";
let contraseña = "ada2019";

let nombreIngresado = prompt("Ingresa tu nombre de usuario");

if (nombreIngresado === nombreDeUsuario) {
 let contraseñaIngresada = prompt("Ingresa tu contraseña")
 if (contraseñaIngresada === contraseña) {
  alert(`Bienvenide, ${nombreDeUsuario}`)
 }
};

/////////////////////////////////////////////////////EJERCICIO 2
let numeroIngresado = Number(prompt("Por favor, ingresa un número"));

if (numeroIngresado % 2 == 0) {
 alert("El número es par")
};

if(numeroIngresado % 2 != 0) {
 alert("El número es impar")
};

/////////////////////////////////////////////////////////EJERCICIO 3
let edadIngresada = prompt("Ingrese su edad");
if (edadIngresada >= 18) {
 alert("Ud. es mayor de edad")
}
else {
 alert("Ud. es menor de edad")
};

////////////////////////////////////////////////////////////EJERCICIO 4
//1

/*alternativa*/

//let password = "ada2019";
//let usuario = "AdaLove";
//let usuarioIngresado = prompt("Cual es tu usuario?");
//let passwordIngresado = prompt("Cual es tu password?");

//if (usuarioIngresado === usuario && passwordIngresado === password) {
// alert(`Bienvenide, ${usuario}`)
//}
//else {
// alert("Ingresaste mal tus datos. Por favor, intentalo de nuevo")
//};

nombreIngresado = prompt("Ingresa tu nombre de usuario");

if (nombreIngresado === nombreDeUsuario) {
 let contraseñaIngresada = prompt("Ingresa tu contraseña")
 if (contraseñaIngresada === contraseña) {
  alert(`Bienvenide, ${nombreDeUsuario}`)
 }
 else {
  alert("La contraseña ingresada es incorrecta")
 };
}
else {
 alert("El usuario ingresado es incorrecto")
};

//2
numeroIngresado = Number(prompt("Por favor, ingresa un número"));

if (numeroIngresado % 2 == 0) {
 alert("El número es par")
}
else {
 alert("El número es impar")
};

//////////////////////////////////////////////////EJERCICIO 5
//1
let contraseñaIngresada;
nombreIngresado = prompt("Ingresa tu nombre de usuario");

nombreIngresado === nombreDeUsuario ? contraseñaIngresada = prompt("Ingresa tu contraseña") : alert(`El usuario ingresado es incorrecto`);
contraseñaIngresada === contraseña ? alert(`Bienvenide, ${usuario}`) : alert(`La contraseña ingresada es incorrecta`);

//2
numeroIngresado = Number(prompt("Por favor, ingresa un número"));

numeroIngresado === 0 ? alert(`El número ingresado es par`) : alert(`El número ingresado es impar`);

//3
edadIngresada = prompt("Ingrese su edad");

edadIngresada >= 18 ? alert(`Ud. es mayor de edad`) : alert(`Ud. es menor de edad`);

///////////////////////////////////////////////EJERCICIO 6
let horaIngresada = prompt(`Ingrese la hora actual`);

if (horaIngresada > 5 && horaIngresada < 12) {
 alert(`¡Buen día!`);
} else if (horaIngresada >= 12 && horaIngresada < 20) {
 alert(`¡Buenas tardes!`)
 } else {
  alert(`¡Buenas noches!`)
};

////////////////////////////////////////EJERCICIO 7
let notaIngresada = prompt(`Por favor, ingresa una nota`);

if (notaIngresada >= 9) {
 alert(`La nota es excelente`)
} else if (notaIngresada < 9 && notaIngresada >= 6) {
 alert(`La nota es buena`)
} else {
 alert(`El examen no está aprobado`)
};

//////////////////////////////////////EJERCICIO 8
let diaIngresado = prompt(`Por favor, ingresa un día`);

if (diaIngresado === "Lunes") {
  alert(`Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'`);
} else if (diaIngresado === "Martes") {
  alert(`Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'`);
} else if (diaIngresado === "Miercoles") {
  alert(`Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'`);
} else if (diaIngresado === "Jueves") {
  alert(`Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'`);
} else if (diaIngresado === "Viernes") {
  alert(`Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'`);
} else if (diaIngresado === "Sabado") {
  alert(`Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío`);
} else if (diaIngresado === "Domingo") {
  alert(`Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'`);
} else {
  alert(`El dato ingresado es inválido`)
 }   