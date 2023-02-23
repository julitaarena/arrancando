
let btn = document.getElementById('btn')
let container_oculto = document.getElementById('container oculto')
let principal = document.getElementById('principal');
let tareaProgramada = document.getElementById('tareaProgramada')
let agregar = document.getElementById('agregar')

btn.addEventListener('click', function() {
    (container_oculto.classList.toggle('active'))
})

function invisible(){
    principal.classList.add('borrar');
}

let cancelar = document.getElementById('cancelar')

function atras(){
    principal.classList.remove('borrar');
    container_oculto.classList.toggle('active');
}

agregar.addEventListener('click', function() {
    (tareaProgramada.classList.toggle('active'));
})

function agregarTarea(){
    container_oculto.classList.remove('active');
    
}


/*let tarea = {
    nombre: 'InputEvent'
    tipo: 'InputEvent'
    descripcion: 'InputEvent'
}*/

/*let input = document.querySelector('input');
let log = document.getElementById('nombreTarea');
let tareaProgramada = document.getElementById('tareaProgramada')

input.addEventListener('input', updateValue)

function updateValue(){
    log.textContent = document.write
}*/