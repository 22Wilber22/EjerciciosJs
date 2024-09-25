function conocerN() {
    let positivo = 0;
    let negativo = 0;
    let npar = 0;
    let nimpar = 0;
    let nmultiplo = 0;
    let total = 0;
    
    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt('Escriba el número que desea ingresar'));
        
        if (positivos(numero)) {
            positivo++;
        } else if (negativos(numero)) {
            negativo++;
        }

        if (par(numero)) {
            npar++;
        } else {
            nimpar++;
        }

        if (multiplo(numero)) {
            nmultiplo++;
        }
        total += numero;
    }

    alert(`Cantidad de números positivos: ${positivo}
Cantidad de números negativos: ${negativo}
Cantidad de números pares: ${npar}
Cantidad de números impares: ${nimpar}
Cantidad de números múltiplos de 15: ${nmultiplo}
Suma total de los números ingresados: ${total}`);

    function par(numero) {
        return numero % 2 === 0;
    }

    function impar(numero) {
        return numero % 2 !== 0;
    }

    function positivos(numero) {
        return numero > 0;
    }
    
    function negativos(numero) {
        return numero < 0;
    }

    function multiplo(numero) {
        return numero % 15 === 0;
    }
}

conocerN();
