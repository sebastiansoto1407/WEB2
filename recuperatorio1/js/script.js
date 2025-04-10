const URL = 'http://localhost:3000/datos';

// agarra lo que se escribio en los inputs
function leerDatos() {
  return {
    clave: id.value,
    info: descripcion.value,
    dia: fecha.value,
    numero: valor.value,
    persona: nombre.value,
    tareaHacer: tarea.value
  }
}

// muestra la tabla con lo que hay en el servidor
function mostrarTabla() {
  fetch(URL).then(res => res.json()).then(lista => {
    tabla.innerHTML = '';
    lista.forEach(item => {
      let fila = document.createElement('tr');
      fila.innerHTML = `<td>${item.id}</td><td>${item.descripcion}</td><td>${item.fecha}</td><td>${item.valor}</td><td>${item.nombre}</td><td>${item.tarea}</td>`;
      fila.onclick = () => fila.classList.toggle('selected');
      tabla.appendChild(fila);
    });
  });
}

// guardaa o actualiza un dato
function guardarInfo() {
  let datos = leerDatos();
  fetch(URL + '/' + datos.clave).then(res => {
    if (res.ok) {
      // si ya existe lo actualiza
      fetch(URL + '/' + datos.clave, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      }).then(mostrarTabla);
    } else {
      // si no existe lo guarda nuevo
      fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      }).then(mostrarTabla);
    }
  });
}

// borra lo que este seleccionado
function borrarFila() {
  document.querySelectorAll('tr.selected').forEach(fila => {
    let clave = fila.children[0].textContent;
    fetch(URL + '/' + clave, { method: 'DELETE' }).then(mostrarTabla);
  });
}

// carga la tabla al principio :)xd
mostrarTabla();