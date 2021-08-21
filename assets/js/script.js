//Definir los arreglos por especialidad

let radiologia=[{hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},{hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},{hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},{hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},{hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'}];

let traumatologia =[{hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA'},{hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE'},{hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE'},{hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE'},{hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA'},{hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE'},{hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE'}];

let dental=[{hora: '08:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE'},{hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE'},{hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA'},{hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA'},{hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA'},{hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE'}];

//console.log(dental[0].paciente + ' - ' + dental[0].prevision)

//Definir variables
let tablas=document.getElementsByClassName('table');
let horasEspecialidades=[radiologia,traumatologia,dental];

//Escribir tabla
for (i=0;i<tablas.length;i++){
  for (j=0;j<horasEspecialidades.length;j++){
    if (i==j){
      for (k=0;k<horasEspecialidades[j].length;k++){
        if (k%2==0){
          tablas[i].getElementsByTagName('tbody')[0].innerHTML=tablas[i].getElementsByTagName('tbody')[0].innerHTML+'<tr class="table-active"><td>'+horasEspecialidades[j][k].hora+'</td><td>'+horasEspecialidades[j][k].especialista+'</td><td>'+horasEspecialidades[j][k].paciente+'</td><td>'+horasEspecialidades[j][k].rut+'</td><td>'+horasEspecialidades[j][k].prevision+'</td></tr>'
        }else{
          tablas[i].getElementsByTagName('tbody')[0].innerHTML=tablas[i].getElementsByTagName('tbody')[0].innerHTML+'<tr><td>'+horasEspecialidades[j][k].hora+'</td><td>'+horasEspecialidades[j][k].especialista+'</td><td>'+horasEspecialidades[j][k].paciente+'</td><td>'+horasEspecialidades[j][k].rut+'</td><td>'+horasEspecialidades[j][k].prevision+'</td></tr>'
        }
      }
    }
  }
}