var listaPersonas = [];

function guardar(){
    var inNombre = document.getElementById("inNombre").value;
    var inFecha = document.getElementById("inFecha").value;
    var inEdad = document.getElementById("inEdad").value;
    var inTelefono = document.getElementById("inTelefono").value;
    var inTrabajo = document.getElementById("inTrabajo").value;

    listaPersonas = [...listaPersonas,{inNombre, inFecha, inEdad, inTelefono, inTrabajo}];
    console.log(listaPersonas);
}