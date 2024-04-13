document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var sede = document.getElementById("sede").value;
    var horario = document.getElementById("horario").value;
    var materia = document.getElementById("materia").value;

    const datos = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        sexo: sexo,
        sede: sede,
        horario: horario,
        materia: materia
    };
    console.log(datos);    
});