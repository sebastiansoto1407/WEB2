import { petService } from "../service/pet-service.js";

const form = document.querySelector("[data-formulario]");
const nombre = document.querySelector("[data-nombre]");
const especie = document.querySelector("[data-especie]");
const edad = document.querySelector("[data-edad]");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await petService.crearPet(
      nombre.value.trim(),
      especie.value.trim(),
      parseInt(edad.value)
    );
    form.reset();
    window.location.href = "./lista_pet.html";
  } catch (error) {
    alert("Error al registrar pet");
    console.error(error);
  }
});
