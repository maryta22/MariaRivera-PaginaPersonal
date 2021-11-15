//Utilizar XMLHttpRequest() para peticiones asíncronas

const contenido = document.getElementById('myContent')
const boton = document.getElementById('btnLoad')
const cargando = document.getElementById('cargando')

//ocultar cargando...
cargando.style.display ='none'

boton.addEventListener('click', () =>{

    //mostrar cargando...
    cargando.style.display ='none'

    const xhr = new XMLHttpRequest()

    //ver estado
    console.log(xhr.readyState)

    //Con qué método voy a hacer la petición y a donde (puede ser url absoluta o relativa).
    xhr.open('GET','confirmacion.html', true)

    //ver estado
    console.log(xhr.readyState)

    //Que voy a hacer con esa data
    xhr.addEventListener('load', (e) => {
        contenido.innerHTML = e.target.responseText

        //ver estado
        console.log(xhr.readyState)

        //ocultar cargando...
        cargando.style.display ='none'
    })

    //Haz la petición
    xhr.send()

    //ver estado
    console.log(xhr.readyState)
})

function enviar(){
    return false;
}

