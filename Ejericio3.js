function categorias(){
    let aumento;
    let name = prompt('Ingrese el nombre del usuario');
    let salario = parseFloat(prompt('Ingrese el salario'));
    let sueldoF;
    let cat;
    let categorias = prompt('Ingrese la categoria (A, B, C, D)');

    switch(categorias.toUpperCase()){
        case 'A':
            aumento = salario *(0.15);
            cat = ('A = 15%');
        break;
        case 'B':
            aumento = salario *(0.30);
            cat = ('B = 30%');
            break;
        case 'C':
            aumento = salario *(0.10);
            cat = ('C = 10%');
            break;
        case 'D':
            aumento = salario *(0.20);
            cat = ('D = 20%');
            break;
        default:
            ('Ingrese una categoria valida');
            return;         
    }
    sueldoF = aumento + salario;
    alert(`El nombre del trabajador es: ${name}\n
        Su caategoria es: ${cat}\n
        Su salario es: $${salario}\n
        El aumento es de: $${aumento}\n 
        El suelo final es de: $${sueldoF} `)
}
categorias();