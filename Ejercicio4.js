function mayor(){
    let n1 = parseInt(prompt('Ingrese el primer numero'));
    let n2 = parseInt(prompt('Ingrese el segundo numero'));

    if (n1>n2){
        return (`El numeero mayor es ${n1}`);
    } else
        return (`El numero mayo es ${n2}`);
}
let resultado = mayor();
alert(resultado);