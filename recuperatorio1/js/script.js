const link = 'http://localhost:3000/datos';
// agarra lo que se escribio en los cuadros
function agarrar() {
  return {
    id: id.value,
    texto: descripcion.value,
    dia: fecha.value,
    num: valor.value,
    quien: nombre.value,
    cosa: tarea.value
  }
}

// pone los datos en la tabla
function mostrar() {
  fetch(link)
    .then(res => res.json())
    .then(info => {
      tabla.innerHTML = '';
      info.forEach(x => {
        let fila = document.createElement('tr');
        fila.innerHTML = `<td>${x.id}</td><td>${x.descripcion}</td><td>${x.fecha}</td><td>${x.valor}</td><td>${x.nombre}</td><td>${x.tarea}</td>`;
        fila.onclick = () => fila.classList.toggle('selected');
        tabla.appendChild(fila);
      });
    });
}
// guarda o edita segun ssi ya existe o no
function guardar() {
  let d = agarrar();
  fetch(link + '/' + d.id)
    .then(r => {
      if (r.ok) {
        // si ya hay ese id lo cambia
        fetch(link + '/' + d.id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(d)
        }).then(mostrar);
      } else {
        // si no hay ese id lo guarda nuevo
        fetch(link, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(d)
        }).then(mostrar);
      }
    });
}
// borra lo que este seleccionado
function borrar() {
  document.querySelectorAll('tr.selected').forEach(f => {
    let id = f.children[0].textContent;
    fetch(link + '/' + id, { method: 'DELETE' }).then(mostrar);
  });
}
// al abrir la pagina ya muestra la tablaa
mostrar();