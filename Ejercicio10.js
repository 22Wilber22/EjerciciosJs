function promedios() {
    let prom1, prom2, prom3;
    let acum1 = 0, acum2 = 0, acum3 = 0;
    let i;
    let msj

    // Turno de la mañana
    i = 1;
    do {
        let edadMorning = parseInt(prompt('Ingrese las edades de los niños del turno de la mañana'));
        acum1 += edadMorning;
        console.log(i);
        i++;
    } while (i <= 5);
    prom1 = (acum1 / 5).toFixed(2);

    console.log('=======');
    // Turno de la tarde
    i = 1;
    do {
        let edadAfter = parseInt(prompt('Ingrese las edades de los niños del turno de la tarde'));
        acum2 += edadAfter;
        console.log(i)
        i++;
    } while (i <= 6);
    prom2 = (acum2 / 6).toFixed(2);
    console.log('=======');
    // Turno de la noche
    i = 1;
    do {
        let edadNight = parseInt(prompt('Ingrese las edades de los niños del turno de la noche'));
        acum3 += edadNight;
        console.log(i);
        i++;
    } while (i <= 11);
    prom3 = (acum3 / 11).toFixed(2);
    if(prom1>prom2 && prom1>prom3){
        msj=('El turno de tomorrow tieme mayor promedio de edades');
    } else if (prom2>prom1 && prom2>prom3){
        msj=('El turno del atrde tiene mayor promedio de edades')
    } else if (prom3>prom1 && prom3>prom2)
    {
        msj=('El turno de la noche tien mayor promedio de edades')
    }

    alert(`La edad promedio de los niños del turno de la mañana es: ${prom1}
La edad promedio de los niños del turno de la tarde es: ${prom2}
La edad promedio de los niños del turno de la noche es: ${prom3}
${msj}`);
}

promedios();
