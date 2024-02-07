export const PERSONAS_MODEL = {
    config:{
        name:'persona_natural',
        cardTitle:'PERSONAS',
        cardAvatar:'assets/images/img/persona.png',
    },
    optionSelected:'home',
    menu: [  
        {name:'home', label:'Inicio', icon:'home'},
        {name:'nuevo', label:'Nuevo', icon:'add'},
        {name:'search',label:'Filtro', icon:'filter_alt'},
        {name:'reports',label:'Descargar', icon:'download'},
        {name:'reports',label:'Eliminar', icon:'delete'},

        ],
    columns: [  
        {name:'nro_identificacion', label:'Nro. identificación',  width:20},
        {name:'nombres', label:'nombres',  width:20},
        {name:'primer_apellido', label:'primer apellido',  width:20},
        {name:'segundo_apellido', label:'segundo apellido',  width:20},
          ],
    elements: [  
        {name:'nroIdentificacion', type:'input',label:'Nro de Identificación',  width:50},
        {name:'nombres',type:'input', label:'Nombre y Apellido',  width:50},
        ],
    formControl: {
        nroIdentificacion:  [''],
        nombres:  ['']
        },

}