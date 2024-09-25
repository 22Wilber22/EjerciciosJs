function calcualarVehiculo(){
    let descuento;
    let select;
    let total;
    let precio;
    let car = prompt('Ingrese el tipo de for que desea adquirir (Ford Fiesta/ Ford Focus/ Ford Escape)');
    switch (car.toUpperCase()){
        case 'FORD FIESTA' || 'FIESTA':
            precio = 10000;
            descuento = 0.05 * precio;
            select = 'Selecciono el Ford Fiesta y el descuento es del 5%';

            break;
        case 'FORD FOCUS' || 'FOCUS':
            precio = 15000;
            descuento = 0.1 * precio;
            select = 'Selecciono el Ford Focus y descuento es del 10%';
            break;
        case 'FORD ESCAPE' || 'ESCAPE':
            precio = 20000;
            descuento = 0.2 * precio;
            select = 'Selecciono el Ford Escape y el descuento es del 20%';
            break;
        default:
            alert('Ingrese un estilo de vehiculo vaido')
            break;
    }
    total =  precio - descuento ;

    alert(`${select}\n El precio es de ${precio}\n El descuento aplicado es de ${descuento}\nEl total a pagar es: $${parseFloat(total).toFixed(2)}`);
}
calcualarVehiculo();
let nuevo = calcualarVehiculo();
alert(nuevo)