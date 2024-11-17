const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;
}
const cambiarColor = (idelemento, valor) => {
    document.getElementById(idelemento).style.color = valor;
}
const cambiarTamanio = (idelemento, valor) => {
    document.getElementById(idelemento).style.fontSize = valor;
}
const agregarElemento = (idelemento, valor) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + valor;
}
const conceptosJS = () => {
    /*
    Tipo de variables en JS
    var: declaraciones globales, ya nose usa por que genera problemas
    let: local,dentro del bloque {},no permite volver a declarar la variabel een el mismo bloque
    const:variables cuyo valor no cambian
    */
    let nombre = "Anthony Narvaez";
    let numero1 = 1000;
    let numero2 = 1000.1
    const PI = 3.1416;
    console.log(nombre);
    console.log(numero1);
    console.log(numero2);
    console.log(PI);
    /*Declaración de arreglos */
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);
    console.log(diasSemana[5]);
    //dentro de JS el concepto de nulo o no exitencia:undifined
    //null !==undefined
    //null existe pero su valor es null, a diferencia del undifined
    let valor = null;
    console.log(valor);
    // ===
    // !==
    //Guarda al final del arreglo
    diasSemana.push('Sabado');
    console.log(diasSemana);
    //Guarda al inicio del arreglo
    diasSemana.unshift('Dias');
    console.log(diasSemana)
    const numeroImares = [1, 3, 5, 7, 9, 11];
    console.log(numeroImares);
    const numeroPares = [2, 4, 6, 8, 10];
    console.log(numeroPares);
    const numeros = numeroImares.concat(numeroPares);
    console.log(numeros);
    //Sentencia de control
    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Ya es Viernes');
        } else {
            console.log('Aun no es Viernes')
        }
    }
    //manejo de objetos
    const miEstudiante = {
        nombre: "Anthony",
        apellido: "Narvaez",
        edad: 25,
        genero: "Masculino",
        ciudad: "Quito"
    };
    console.log(miEstudiante);
    console.log(miEstudiante.apellido);
    console.log(miEstudiante.nombre);
    if (miEstudiante.edad === 25) {
        console.log("Tiene 25");
    } else {
        console.log("ya no tiene 25");
    }

    miEstudiante.apellido = 'Narvaez';
    console.log(miEstudiante);
    //Declaracion dde atributos pero como objetos
    const miProfesor = {
        nombre: "Eduson",
        apellido: "Cayambe",
        edad: 35,
        direccion: {
            calle: "Av. Eloy Alfaro",
            casa: "e5-34",
            barrio: "El progreso"
        }
    };
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.barrio);
    miProfesor.direccion.calle = "Antonio Basantes";
    console.log(miProfesor);
    if (miProfesor.edad === miProfesor.estatura) {
        console.log("Son iguales");
    } else {
        console.log("Estos no son lo mismo");
    }

    //Arreglo de objetos
    const est1 = {
        nombre: "Anthony",
        apellido: "Narvaez",
        edad: 25
    }
    const est2 = {
        nombre: "Josue",
        apellido: "Romero",
        edad: 13
    }
    const est3 = {
        nombre: "fannie",
        apellido: "Sofia",
        edad: 21
    }
    const arregloEstudiantes = [est1, est2, est3];
    console.log(arregloEstudiantes);
    console.log(arregloEstudiantes[1]);
    console.log(arregloEstudiantes[1].nombre);

    const arregloEstuadiantes2 = [{ nombre: "Miguel", apellido: "Heberon", edad: 45 },
    { nombre: "Andrea", apellido: "Guayaquil", edad: 23 },
    { nombre: "krisyel", apellido: "Ramos", edad: 66 },
    { nombre: "Cristian", apellido: "Tobar", edad: 45 },
    { nombre: "Alejandro", apellido: "Marquez", edad: 12 }
    ]
    console.log(arregloEstuadiantes2);
    console.table(arregloEstuadiantes2);

    //uso del pop elimina el utlimo elemento que esta en el array
    console.log("Uso del pop");
    const estudiante = arregloEstuadiantes2.pop();
    console.log(estudiante);

    console.table(arregloEstuadiantes2);


    //Desestructuracion de arreglos
    //separa en partes cada una de la las pocisiones del arreglo
    const colores = ['Amarillo', 'Azul', 'Verde', 'Rojo', 'Rosado'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);
    console.log(c5);

    const [m1, m2, m3, m4, m5, m6, m7, m8] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(m1);
    console.log(m2);
    console.log(m5);
    console.log(m8);

    const [, mes2, , , mes5] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

    console.log(mes2);
    console.log(mes5);

    //Desestructuracion de objetos
    console.log("Desestructuracion de objetos");

    const automovil = {
        marca: 'Toyota',
        modelo: 'Pruis',
        anio: 2024,
        color: 'plateado'
    }

    //no importa el orden viene dado por nombre que tiene el atributo mas no por la posicion en la que se ecuntra
    const { modelo, anio, color, marca } = automovil;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);

    desestructuracion(automovil);
    const { nombreP, raza, estatura } = { nombreP: "Perro", raza: "pastor", estatura: 120 };
    console.log(nombreP);
    console.log(raza);
    console.log(estatura);

    //EJEMPLO DESESTRUCTURAR EN CLASE 

    const universidad = {
        nombreU: "UCE",
        estudiantes: 485566755,
        rector: {
            nombreR: "FELIPE",
            apellidoR: "BORJA"
        }
    }

    /*
    //En dos pasos
    const {estudiantes,nombre,rector}=universidad;
    const{nombreR}= rector;
    console.log(nombreR);
    */
    const { estudiantes, nombreU, rector: { nombreR, apellidoR } } = universidad;
    console.log(nombreR);
    console.log(apellidoR);



}

//const desestructuracion = (automovil) => {
const desestructuracion = ({ modelo, anio, color, marca }) => {
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);

}





