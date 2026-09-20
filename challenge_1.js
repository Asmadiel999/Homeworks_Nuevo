/*
Funciones Regulares: Las funciones regulares se diferencian de las funciones flechas principalmente
en la sintaxis, el manejo del contexto this, el uso de argumentos y su capacidad para actuar como
constructores. 

Sintaxis: las funciones regulares utilizan la palabra reservada function y pueden tener nombre o ser
anónimas. 

Contexto: las funcioneos regulares tienen su propio objeto this, el cual cambia dinámicamente según cómo y 
dónde se invoque la función. 

Uso como constructor: puede usarse la palabra clave new para instanciar objetos. 

Objeto: cuentan con el objeto local arguments que recopila todos los parámetros enviados.
*/

let numero_evaluacion = 10 ; //imaginemos que el número de evaluación es un número que digitó el usuario.

function calcularNumeroPar(numero_evaluacion) {
    let m = ''

    if (numero_evaluacion % 2 == 0) {
        m = `El número ${numero_evaluacion} es par`
    }else{
        m = `El número ${numero_evaluacion} es impar`
    }

    return m; 
}

//cuando se llame a la función calcularNumeroPar(10) mostrará un mensaje diciendo que es par.

/*
Funciones Flecha: Las funciones flecha son una alternativa compacta a una expresión de función tradicional,
pero es limitada  no se puede usar en todas las situaciones. Sin embargo, la función flecha tiene las
siguientes características que la diferencian de las tradicionales: 

1. No tiene sus propios enlaces a this o super y no se debe usar como métodos. 
2. No tiene argumentos o palabras clave new.target.
3. No es apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance.
4. No se puede utilizar como constructor.
5. No se puede utilizar yield dentro de su cuerpo.
*/

const compararNumeros = (numero) => console.log(numero % 2 === 0 ? `El número ${numero} es par` : `El número ${numero} es impar`)