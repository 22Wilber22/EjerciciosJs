function notas() {
    let nombre = prompt("Por favor ingrese un nombre");
    let carnet = prompt("Ingrese el número de carnet");
    let examen = parseFloat(prompt("Ingresar la nota del examen (0-10)"));
    let tareas = parseFloat(prompt("Ingresar la nota general de las tareas (0-10)"));
    let asistencia = parseFloat(prompt("Ingresar la nota de asistencia (0-10)"));
    let investigacion = parseFloat(prompt("Ingresar la nota de investigación (0-10)"));

    if (esNotaValida(examen) && esNotaValida(tareas) && esNotaValida(asistencia) && esNotaValida(investigacion)) {
        let nexamen = examen * 0.2;
        let ntareas = tareas * 0.4;
        let nasistencia = asistencia * 0.1;
        let ninvestigacion = investigacion * 0.3;
        let total = nexamen + ntareas + nasistencia + ninvestigacion;

        console.log(alert(`Nombre: ${nombre}\nCarnet: ${carnet}\n\n` +
              `Porcentaje del examen (20%): ${nexamen.toFixed(2)}\n` +
              `Porcentaje de tareas (40%): ${ntareas.toFixed(2)}\n` +
              `Porcentaje de asistencia (10%): ${nasistencia.toFixed(2)}\n` +
              `Porcentaje de investigación (30%): ${ninvestigacion.toFixed(2)}\n\n` +
              `Nota final: ${total.toFixed(2)}`));
    } else {
        alert('Ingrese valores correctos. Las notas deben ser mayores o iguales a 0 y menores o iguales a 10');
    }
}

function esNotaValida(nota) {
    return nota >= 0 && nota <= 10;
}

notas();