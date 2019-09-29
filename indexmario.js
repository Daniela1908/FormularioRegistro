function ControlVisibilidadCamposSegunTipoPersona(personaNatural) {
    var visibilidadPersonaNatural;
    var visibilidadPersonaJuriica;
    if (personaNatural) {
        //// Se ocultan los campos relacionados a persona juridica.
        visibilidadPersonaJuriica = "hidden";
        //// Se muestran los campos relacionados a persona natural.
        visibilidadPersonaNatural = "visible";
    }
    else {
        //// Se muestran los campos relacionados a persona juridica.
        visibilidadPersonaJuriica = "visible";
        //// Se ocultan los campos relacionados a persona natural.
        visibilidadPersonaNatural = "hidden";
    }
    //// Campos persona juridica
    document.getElementById("lblpjrazonsocial").style.visibility = visibilidadPersonaJuriica;
    document.getElementById("pjrazonsocial").style.visibility = visibilidadPersonaJuriica;
    document.getElementById("lblpjpersonacontacto").style.visibility = visibilidadPersonaJuriica;
    document.getElementById("pjpersonacontacto").style.visibility = visibilidadPersonaJuriica;
    document.getElementById("lblpjnit").style.visibility = visibilidadPersonaJuriica;
    document.getElementById("pjnit").style.visibility = visibilidadPersonaJuriica;
    //// Campos persona natural
    document.getElementById("lblpnnombres").style.visibility = visibilidadPersonaNatural;
    document.getElementById("pnnombres").style.visibility = visibilidadPersonaNatural;
    document.getElementById("lblpnapellidos").style.visibility = visibilidadPersonaNatural;
    document.getElementById("pnapellidos").style.visibility = visibilidadPersonaNatural;
    document.getElementById("lblpndocumento").style.visibility = visibilidadPersonaNatural;
    document.getElementById("pndocumento").style.visibility = visibilidadPersonaNatural;
}
