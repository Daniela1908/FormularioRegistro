function ControlVisibilidadCamposSegunTipoPersona(personaNatural: boolean)
{
    let visibilidadPersonaNatural: string;
    let visibilidadPersonaJuridica:string;


    if (personaNatural) {
//Se ocultan los campos de la persona juridica
        visibilidadPersonaNatural = "visible";
        visibilidadPersonaJuridica = "hidden";
            
    } else {
        visibilidadPersonaNatural = "hidden";
        visibilidadPersonaJuridica = "visible";   
    }

    document.getElementById("lblnombre").style.visibility = visibilidadPersonaNatural;
    document.getElementById("txtnombre").style.visibility = visibilidadPersonaNatural;
    document.getElementById("lblapellido").style.visibility = visibilidadPersonaNatural;
    document.getElementById("txtapellido").style.visibility = visibilidadPersonaNatural;
    document.getElementById("lbldocumento").style.visibility = visibilidadPersonaNatural;
    document.getElementById("txtdocumento").style.visibility = visibilidadPersonaNatural;

    document.getElementById("lblrazonSocial").style.visibility = visibilidadPersonaJuridica;
    document.getElementById("txtrazonSocial").style.visibility = visibilidadPersonaJuridica;
    document.getElementById("lblpersonaContacto").style.visibility = visibilidadPersonaJuridica;
    document.getElementById("txtpersonaContacto").style.visibility = visibilidadPersonaJuridica;
    document.getElementById("lblnit").style.visibility = visibilidadPersonaJuridica;
    document.getElementById("txtnit").style.visibility = visibilidadPersonaJuridica;
    document.getElementById("lblnumeroEmpleados").style.visibility = visibilidadPersonaJuridica;
    document.getElementById("txtnumeroEmpleados").style.visibility = visibilidadPersonaJuridica;

}