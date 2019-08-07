const eventBrite = new eventbrite();
const ui = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const textoBuscador = document.getElementById('evento').value;
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    if (textoBuscador === '') {
        ui.mostrarMensaje('No se escribio nada en el buscador', 'alert alert-danger mt-4');
    } else {
        eventBrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
        .then(eventos => {
            if(eventos.eventos.events.length > 0){
                ui.limpiarResultados();
                ui.mostrarEventos(eventos.eventos);
            } else{
                ui.mostrarMensaje('No hay resultados', 'alert alert-danger mt-4');
            }
        })
    }
})