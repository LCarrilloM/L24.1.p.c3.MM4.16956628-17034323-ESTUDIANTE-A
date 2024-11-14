/*ESTUDIANTE-A
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los estudiantes de un semestre dado.

La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}

Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado.
*/


    let estudiantes = [
        { nombre: "Luis", semestre: "5", nota: 14},
        { nombre: "Ana", semestre: "1", nota: 17},
        { nombre: "Pedro", semestre: "5", nota: 10}
    ];

    let semestres = ["1","2", "3","4","5","6","7","8","9","10"];

    let estudiantesSemestre = (estudiantes,semestre) => {
        let estudiantesFiltrados = [];
        let semestreFiltrado = 0;
        estudiante.forEach((estudiantes) => {
            if (estudiantes.semestre == semestre) {
                estudiantesFiltrados.push(estudiantes);
                semestreFiltrado = semestre;
            }
        });
        return [estudiantesFiltrados,semestreFiltrado];
    }
   
    let salida = document.getElementById("salida");
    let [estudiante,filtrado] = estudiantesSemestre (estudiantes, 1); 
    salida.innerHTML = `estudiantes por semestre ${semestre[filtrado-1]}<br>`;
    estudiante.forEach((estudiante) => {
    salida.innerHTML += `Nombre: ${estudiante.nombre}<br>`
    salida.innerHTML += `Nota: ${estudiante.nota}<br>`});
