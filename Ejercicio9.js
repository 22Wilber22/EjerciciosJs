function convertir(){
    let fahrenheit;
    let celsius = parseFloat(prompt('Ingrese la temperatura en grados C'));

    fahrenheit = ((celsius *(9/5)) + 32).toFixed(2);
    console.log (fahrenheit);

    if(fahrenheit >=14 && fahrenheit<=32){
        alert('Temperatura Baja: ' + fahrenheit);
    } else if(fahrenheit >32 && fahrenheit<=68){
        alert('Temperatura adecuada: ' + fahrenheit);
    } else if (fahrenheit >68 && fahrenheit<=96){
        alert('Temperatura alta: ' + fahrenheit);
    } else {
        alert('Temperatura desconocida');
    }
    
}
convertir();