const API_URL = 'http://localhost/Async-promesas-js/api/pets.php';

export const petService = {
  listaPets: () => fetch(API_URL).then(res => res.json()),

  crearPet: (nombre, especie, edad) =>
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: crypto.randomUUID(), nombre, especie, edad })
    }).then(res => res.json()),

  eliminarPet: (id) =>
    fetch(`${API_URL}?id=${id}`, { method: "DELETE" }).then(res => res.json()),

  editarPet: (id, nombre, especie, edad) =>
    fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, nombre, especie, edad })
    }).then(res => res.json()),
};
