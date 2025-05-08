import { petService } from "../service/pet-service.js";

const tabla = document.querySelector("[data-tabla-pets]");

const crearFila = (nombre, especie, edad, id) => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${especie}</td>
    <td>${edad}</td>
    <td><button data-id="${id}" class="button">Eliminar</button></td>
  `;

  fila.querySelector("button").addEventListener("click", async () => {
    await petService.eliminarPet(id);
    fila.remove();
  });

  return fila;
};

const cargarPets = async () => {
  try {
    const pets = await petService.listaPets();
    pets.forEach(({ nombre, especie, edad, id }) => {
      const fila = crearFila(nombre, especie, edad, id);
      tabla.appendChild(fila);
    });
  } catch (error) {
    alert("Error al cargar mascotas");
  }
};

cargarPets();
