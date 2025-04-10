const API = 'http://localhost:3000/datos';
function getInputs() {
  return {
    id: id.value,
    descripcion: descripcion.value,
    fecha: fecha.value,
    valor: valor.value,
    nombre: nombre.value,
    tarea: tarea.value
  }
}
function cargarTabla() {
  fetch(API).then(r => r.json()).then(data => {
    tabla.innerHTML = '';
    data.forEach(x => {
      let f = document.createElement('tr');
      f.innerHTML = `<td>${x.id}</td><td>${x.descripcion}</td><td>${x.fecha}</td><td>${x.valor}</td><td>${x.nombre}</td><td>${x.tarea}</td>`;
      f.onclick = () => f.classList.toggle('selected');
      tabla.appendChild(f);
    });
  });
}
function guardarDato() {
  let d = getInputs();
  fetch(API + '/' + d.id).then(r => {
    if (r.ok) {
      fetch(API + '/' + d.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(d)
      }).then(cargarTabla);
    } else {
      fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(d)
      }).then(cargarTabla);
    }
  });
}
function borrarSeleccionado() {
  document.querySelectorAll('tr.selected').forEach(f => {
    let id = f.children[0].textContent;
    fetch(API + '/' + id, { method: 'DELETE' }).then(cargarTabla);
  });
}
cargarTabla();
