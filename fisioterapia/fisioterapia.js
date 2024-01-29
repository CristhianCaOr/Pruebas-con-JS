
function identificacion(){

let  documento = null
documento = prompt("Pon el tipo de documento y el numero de identificacion")
    document.write(documento)
}

function visitapresencial(){
    // Inicio atencion presencial
    
    // funciones visita presencial
function agregar(){
    let  pork = null
    pork = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
        document.write(pork)
}

function presencialmente(){
        document.write("<br>Se realiza visita desde el área con el objetivo de hacer seguimiento y la atención, se llega a la vivienda de la usuaria donde, ")
} 


function condicionesusuario(){
    let  estado = null
    let  why = null
    estado = prompt("¿como estaba el usuario? \n 1: bien \n 2: mal / regular") 
    
    switch(estado){
            
        case "1":
                document.write(" se encuentra en estables condiciones de salud general ")
            break;

            case "2":
                why = prompt("¿Por que?")
                document.write(why)
            break;
        }

// Fin funciones visita presencial


    // inicio condiciones movilidad articular
}
    
    
    
function movilidadarticular(){
    function agregar(){
        let  pork = null
        pork = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
        document.write(pork)
    }

let miembros = null   
let what = null
miembros = prompt("en que miembros \n 1:Miembros superiores \n 2: Miembros inferiores \n 3: Miembro superiores e inferiores ")
 
switch(miembros){
    case "1":
        document.write("se enfoca la atención en técnicas de movilidad articular en miembros superiores, ")
    break;

    case "2":
        document.write("se enfoca la atención en técnicas de movilidad articular en miembros inferiores, ")
    break;

    case "3":
        document.write("se enfoca la atención en técnicas de movilidad articular en miembros superiores e inferiores, ")
    break;
}

what = prompt("que se hizo o que se utilizo \n 1: elevacion de miembros superiores \n 2: botellas caseras \n 3: peso corporal")

switch(what){
    case "1":
        document.write("se realizan elevaciones de miembros inferiores para mejorar retorno censo y edema, ")
    break;

    case "2":
        document.write("con la utilización de botellas caseras, ")
    break;

    case "3":
        document.write("con la utilización de su propio peso corporal, ")
    break;
}
           
agregar()
        

}
// fin condicional de movilidad articular 
    





function felxo(){
    let = extencion = ""
    extencion = prompt("extencion de que \n 1: rodillas \n 2: caderas \n 3: rodillas y caderas \n 4: codo \n 5: hombro \n 6: codo y hombro  ")
    if(extencion == "1"){
        document.write("se enfoca la atención en desplazamientos en flexo extensión de rodillas, ")
    } else if(extencion == "2"){
        document.write("se enfoca la atención en desplazamientos en flexo extensión de caderas, ")
    } else if(extencion == "3"){
        document.write("se enfoca la atención en desplazamientos en flexo extensión de rodillas y caderas, ")
    } else if(extencion == "4"){
        document.write("se enfoca la atención en desplazamientos en flexo extensión de codos, ")
    } else if(extencion == "5"){
        document.write("se enfoca la atención en desplazamientos en flexo extensión de hombros, ")
    } else if(extencion == "6"){
        document.write("se enfoca la atención en desplazamientos en flexo extensión de codo y hombros, ")
    }
    
}// fin fn(flexo) 
    
    

function enfoquevisita1(){
        let = razon = ""
        let = miembros = ""
        let = what = ""
        function agregar(){
        let = pork = ""
        pork = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
        document.write(pork)
    }
        
        razon1 = prompt("motivo de la atencion: \n 1: Revision de ejercicios dejados con anterioridad \n 2: movilidad articular \n 3: fortalecimiento de miembros \n 4: desplazamientos \n 5: felxo - extencion \n 6: abduccion y aduccion \n 7: rotaciones \n 8: técnicas de marcha \n 9: equilibrio \n 10: propiocepción \n 11: CORE \n 12: Control cabeza y cuello \n 13: tecnicas de masaje \n 14: posicion de tendon \n 15: asesoria para manejo de dolor")
    
        if(razon1 == "1"){
            document.write("se enfoca la atención en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlas con frecuencia y la importancia de los mismos, ")
        } else if(razon1 == "2"){
            movilidadarticular()
        } else if(razon1 == "3"){
        document.write("se enfoca la atención en fortalecimiento de miembros superiores e inferiores, ")
        } else if(razon1 == "4"){
            document.write("se enfoca la atención en desplazamientos en diferentes direcciones, ")
        } else if(razon1 == "5"){
            felxo()
        } else if(razon1 == "6"){
            document.write("la atención se enfoca en abducción y aducción, ")
            agregar()
        } else if(razon1 == "7"){
            document.write("la atención se enfoca en rotaciones, ")
            agregar()
        } else if(razon1 == "8"){
            document.write("la atención se enfoca en técnicas de marcha, ")
            agregar()
        } else if(razon1 == "9"){
            document.write("la atención se enfoca en técnicas de equilibrio,y propiocepcion, ")
        agregar()
        } else if(razon1 == "10"){
            document.write("la atención se enfoca en propiocepción, ")
            agregar()
        } else if(razon1 == "11"){
            document.write("se enfoca la atención en la realización de ejercicios core para fortalecimiento de tronco miembros inferiores y mejorar patrón de marcha, ")
        } else if(razon1 == "12"){
            document.write("se enfoca la atención en la realización de técnicas para control de cabeza y cuello mediante estimulación paravertebrales, movilidad de cabeza en diferentes direcciones sosteniendo 6 segundos para controlar cabeza, ")
        } else if(razon1 == "13"){
            document.write("se enfoca la atención en técnicas de masaje")
        } else if(razon1 == "14"){
            document.write("la atencion se enfoca en la posición del tendon, para modulación del tono muscular")
        } else if(razon1 == "15"){
            document.write("se enfoca la atención y la asesoría para manejo de dolor")
        }
    

} // código motivo de la visita 1


function enfoquevisita2(){
        let = razon = ""
        let = miembros = ""
        let = what = ""
        function agregar(){
        let = pork = ""
        pork = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
        document.write(pork)
    }
        
        razon1 = prompt("motivo de la atencion: \n 1: Revision de ejercicios dejados con anterioridad \n 2: movilidad articular \n 3: fortalecimiento de miembros \n 4: desplazamientos \n 5: felxo - extencion \n 6: abduccion y aduccion \n 7: rotaciones \n 8: técnicas de marcha \n 9: equilibrio \n 10: propiocepción \n 11: CORE \n 12: control cuello y cabeza \n 13: tecnicas de masaje \n 14: posicion de tendon \n 15: asesoria para manejo de dolor")
    
        if(razon1 == "1"){
            document.write(", tambien se enfoca la atención en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlas con frecuencia y la importancia de los mismos, ")
        } else if(razon1 == "2"){
            movilidadarticular()
        } else if(razon1 == "3"){
        document.write("tambien se enfoca la atención en fortalecimiento de miembros superiores e inferiores, ")
        } else if(razon1 == "4"){
            document.write("tambien se enfoca la atención en desplazamientos en diferentes direcciones, ")
        } else if(razon1 == "5"){
            felxo()
        } else if(razon1 == "6"){
            document.write("tambien la atención se enfoca en abducción y aducción, ")
            agregar()
        } else if(razon1 == "7"){
            document.write("tambien la atención se enfoca en rotaciones, ")
            agregar()
        } else if(razon1 == "8"){
            document.write("tambien la atención se enfoca en técnicas de marcha, ")
            agregar()
        } else if(razon1 == "9"){
            document.write("tambien la atención se enfoca en técnicas de equilibrio, ")
        agregar()
        } else if(razon1 == "10"){
            document.write("la atención se enfoca tambien en la propiocepción, ")
            agregar()
        } else if(razon1 == "11"){
            document.write("tambien se enfoca en en la realización de ejercicios core para fortalecimiento de tronco miembros inferiores y mejorar patrón de marcha, ")
        } else if(razon1 == "12"){
            document.write("tambien en realización de técnicas para control de cabeza y cuello mediante estimulación paravertebrales, movilidad de cabeza en diferentes direcciones sosteniendo 6 segundos para controlar cabeza, ")
        } else if(razon1 == "13"){
            document.write("tambien se enfoca la atención en técnicas de masaje")
        } else if(razon1 == "14"){
            document.write("tambien en la posición del tendon, para modulación del tono muscular")
        } else if(razon1 == "15"){
            document.write(" tanmbien en la asesoría para manejo de dolor")
        }
    

} // código motivo de la visita 2


function enfoquevisita3(){
        let = razon = ""
        let = miembros = ""
        let = what = ""
        function agregar(){
        let = pork = ""
        pork = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
        document.write(pork)
    }
        
        razon1 = prompt("motivo de la atencion: \n 1: Revision de ejercicios dejados con anterioridad \n 2: movilidad articular \n 3: fortalecimiento de miembros \n 4: desplazamientos \n 5: felxo - extencion \n 6: abduccion y aduccion \n 7: rotaciones \n 8: técnicas de marcha \n 9: equilibrio \n 10: propiocepción \n 11: CORE \n 12: control cuello y cabeza \n 13: tecnicas de masaje \n 14: posicion de tendon \n 15: asesoria para manejo de dolor")
    
        if(razon1 == "1"){
            document.write(" y en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlas con frecuencia y la importancia de los mismos, ")
        } else if(razon1 == "2"){
            movilidadarticular()
        } else if(razon1 == "3"){
        document.write("y en fortalecimiento de miembros superiores e inferiores, ")
        } else if(razon1 == "4"){
            document.write("y en desplazamientos en diferentes direcciones, ")
        } else if(razon1 == "5"){
            felxo()
        } else if(razon1 == "6"){
            document.write("y en abducción y aducción, ")
            agregar()
        } else if(razon1 == "7"){
            document.write("y en rotaciones, ")
            agregar()
        } else if(razon1 == "8"){
            document.write("y en técnicas de marcha, ")
            agregar()
        } else if(razon1 == "9"){
            document.write("y en técnicas de equilibrio, ")
        agregar()
        } else if(razon1 == "10"){
            document.write("y en la propiocepción, ")
            agregar()
        } else if(razon1 == "11"){
            document.write("y en la realización de ejercicios core para fortalecimiento de tronco miembros inferiores y mejorar patrón de marcha, ")
        } else if(razon1 == "12"){
            document.write("y en la realización de técnicas para control de cabeza y cuello mediante estimulación paravertebrales, movilidad de cabeza en diferentes direcciones sosteniendo 6 segundos para controlar cabeza, ")
        } else if(razon1 == "13"){
            document.write("y en técnicas de masaje")
        } else if(razon1 == "14"){
            document.write("y en la posición del tendon, para modulación del tono muscular")
        } else if(razon1 == "15"){
            document.write("y la asesoría para manejo de dolor")
        }
    

} // código motivo de la visita 3


function referencias(){
        let = references = ""
        references = prompt("¿Dejaste indicaciones? \n 1: si  \n 2: no ")
        if(references == "1"){
            document.write(" se dejan las indicaciones y se recuerdan los compromisos y dinámicas del programa, se deja el usuario en estables condiciones y se informa la fecha de la próxima atención ")} else if(references == "2"){
                document.write(" ")
            };
}
    
function fecha(){
        let = cita = ""
        cita = prompt("Escribe la fecha de la proxima visita")
        document.write(cita + " ")
}
    
function cierrepresencial(){
        document.write("se deja a usuario en estables condiciones de salud general.")
}
    
// Fin funciones visita presencial
    
    
    // inicio codigo de la visita presencial
    
    presencialmente()
    condicionesusuario()
    enfoquevisita1()
    enfoquevisita2()
    enfoquevisita2()
    enfoquevisita3()
    referencias()
    fecha()
    cierrepresencial()
    


} // Fin codigo visita presencial



function atencionvirtual(){  
    // Inicio atencion virtual
    
    function agregar(){
        let = pork = ""
        pork = prompt("¿Deseas agregar algo mas? sino, dale aceptar")
        document.write(pork)
    }
    function atenciontelefonica(){
        let = eleccion = ""     
        eleccion = prompt("¿Qué tipo de atencion fue? \n 1: para virtual")
        if(eleccion == "1"){
            document.write("<br>se realiza seguimiento telefónico con el objetivo de hacer seguimiento desde el área y reencuadre frente al inicio de las atenciones, se establece comunicación con acudiente del usuario, ")} 
    } 
    function estadousuario(){
        let = estado = ""
        let = razon = ""    
        
        estado = prompt("¿como estaba el usuario? \n 1: Bien \n 2: mal") 
        if (estado == "1"){
            document.write(" quien indica que el usuario se ha encontrado en estables condiciones de salud general ")
        } 
        else if(estado == "2"){
            razon = prompt("¿Por que? \n 1: problemas economicos \n 2: hospitalizacion \n 3: otro" )
        if(razon == "1"){
            document.write("quien refiere que se ha presentado dificultad para conseguir los alimentos y la situación económica es compleja")
        } else if (razon == "2"){
            document.write("quien refiere que el usuario esta hospitalizado ")}
        } else if(razon == "3"){
            agregar()
        }
    }
    function enfoquellamada(){
        let = razon0 = ""
        
        razon0 = prompt("motivo de la atencion: \n 0: ninguna\n 1: indicaciones de las dinamicas del proyecto \n 2: continuacion de atenciones \n 3: condiciones de salud del usuario \n 4: Revision de ejercicios dejados con anterioridad")
        if(razon0 == "1"){
            document.write("la atención se enfoca en las indicaciones frente a las dinámicas del proyecto, la continuidad de las atenciones y la importancia de cumplir con los compromisos")
        } else if(razon0 == "2"){
            document.write("la atención se enfoca en la indicación de la continuidad de las atenciones")
        } else if(razon0 == "3"){
            document.write("se enfoca la atención en la revisión de las condiciones de salud de la usuaria y en el cuidado")
        } else if(razon0 == "4"){
            document.write("se enfoca la atención en revisión de ejercicios dejados con anterioridad, se le recuerda la importancia de ejecutarlas con frecuencia y la importancia de las mismas para evitar lesiones y dolores articulares")
        } else if (razon0 == "0"){
            document.write(" ")
        }
    }
    function indicaciones(){
        let = indications = ""
        indications = prompt("¿Dejaste indicaciones? \n 1: si  \n 2: no ")
        if(indications == "1"){
            document.write(" se dejan las indicaciones y se recuerdan los compromisos y dinámicas del programa, se deja el usuario en estables condiciones y se informa la fecha de la próxima atención ")} else if(indications == "2"){
                document.write(" ")
            };
    } 
    function tecnicas(){
        let = tecnics = ""
        let = tipodetecnica = ""
        let = question = ""
        tecnics = prompt("¿El usuario practico tecnicas? \n 1: si  \n 2: no ")
        if(tecnics == "1"){
            tipodetecnica = prompt("que tecnicas ha practicado el usuario \n 1: movilidad articular \n 2: tecnicas de cambios de posición \n 3: ambas \n 4: reducir espasticidad" )
    if(tipodetecnica == "1"){
        document.write(" indica que se han aplicado las tecnicas con enfoque en movilidad articular, ")
    } else if(tipodetecnica == "2"){
        document.write(" indica que se han aplicado las tecnicas con enfoque en cambios de posición, ")
    } else if(tipodetecnica == "3"){
        document.write(" indica que han aplicado tecnicas con enfoque en movilidad articular y cambios de posición, ")}
        else if(tipodetecnica == "4"){
        document.write(" indica que han aplicado tecnicas para reducir espasticidad")
    }} else if(tecnics == "2"){
        document.write(" ")
    }}
    function fecha(){
        let = cita = ""
        cita = prompt("Escribe la fecha de la proxima visita, ")
        document.write(cita)
    }
    function cierrevirtual(){
        document.write(", se lleva a cabo la atención virtual de activación bajo consentimiento de quien la recibe dado que el servicio de transporte para facilitar las atenciones presenciales inician en los primeros días de junio por lo anterior se deja constancia de estas sin firma del usuario y/o persona cuidando. ")
    }
    function ejercicios(){
        let = practicas = ""
        let = cual = ""
        
        practicas = prompt("¿Le han dejado ejercicicos al usuario? \n 1: si \n 2: no")
    if(practicas == "1"){
        cual = prompt("¿Cuales? \n 1: movilidad articular \n 2: ejercicios en miembros superiores \n 3: ejercicios en miembros inferiores \n 4:movilidad articular en miembros superiores \n 5:movilidad articular en miembros inferiores \n 6: movilidad articular en miembros superiores e inferiores")
    } if (cual == "1"){
        document.write("se dejan ejercicios de movilidad articular")
    } else if(cual == "2"){
        document.write("se dejan ejercicios para miembros superiores")
    } else if(cual == "3"){
        ducument.write("se dejan ejercicios para miembros inferiores")
    } else if(cual == "4"){
        document.write("se dejan ejercicios para movilidad articular en miembros superiores")
    } else if(cual == "5"){
        document.write("se dejan ejercicios para movilidad articular en miembros inferiores")
    } else if(cual == "6"){
        document.write("se dejan ejercicios para movilidad articular en miembros superiores e inferiores")
    } else if(practicas == "2"){
        document.write(" ")}
    };
    
    
    
    atenciontelefonica()
    estadousuario()
    agregar()
    enfoquellamada()
    agregar()
    ejercicios()
    tecnicas()
    indicaciones()
    agregar()
    fecha()
    cierrevirtual()
    
    }// fin atencion virtual



function tipodevisita(){
    let  respuesta = null
    respuesta = prompt("¿de que forma fue la visita? \n 1: presencial \n 2: virtual")
    
    switch(respuesta){
        case "1":
            visitapresencial()
        break;

        case "2":
            atencionvirtual()
        break;
    }
    
}



identificacion()
tipodevisita()
