function descViaje(){
    let origen = 'Palma';
    let descuento;
    let porcentaje;
    let precio;
    let total;
    let destino =  prompt('Ingrese el destino del viaje:\nLa costa del sol desc 5%\nPanchimalco desc 10%\nPuerto el triunfo desc 15%')
    switch(destino.toUpperCase()){
        case 'LA COSTA DEL SOL' || 'COSTA':
            porcentaje = 0.05;
            precio = 25;
            descuento = precio * porcentaje;
            break;
        case 'PANCHIMALCO':
            porcentaje = 0.1;
            precio = 30;
            descuento = precio * porcentaje;
            break;
        case 'PUERTO EL TRIUNFO' || 'TRIUNFO':
            porcentaje = 0.15;
            precio = 35;
            descuento = precio * porcentaje;
            break;
        default:
            alert('Ingrese un lugar valido');
            break;
    }
    total = precio - descuento;
    alert(`El lugar de inicio del viaje es de ${origen} hacia ${destino}
        \nPrecio del viaje $${precio}
        \nDescuento: ${porcentaje}
        \nEl precio final es de $${parseFloat(total).toFixed(2)}`
    );
}
descViaje()