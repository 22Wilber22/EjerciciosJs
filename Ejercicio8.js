function tabla(){

    let i = 1;
    let n = parseInt(prompt('Ingresa el numero de la tabla'));
    do{
       // alert(`${n} * ${i} = ${n*i}`); imprimir en el navegaro
        console.log(`${n} * ${i} = ${n*i}`); //imprimir consola
        i++
    } while (i<=10)
}

tabla();



