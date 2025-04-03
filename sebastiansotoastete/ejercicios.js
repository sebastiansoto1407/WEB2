const input = document.querySelector("#newItem");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const toggleBtn = document.querySelector("#toggleBtn");
const countBtn = document.querySelector("#countBtn");
const output = document.querySelector("#output");


function crearItem(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    li.classList.add("item", "task");

    

    // elimina
    li.addEventListener("dblclick", () => {
        taskList.removeChild(li);
    });

    return li;
}

//2
addBtn.addEventListener("click", () => {
    const texto = input.value.trim();

    // si no se escribe nada un alert
    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // aagrega el nuevo elemento a la lista
    const nuevoItem = crearItem(texto);
    taskList.appendChild(nuevoItem);

    // limpia
    input.value = "";
});



// 5 uenta items 
countBtn.addEventListener("click", () => {
    const total = taskList.querySelectorAll("li").length; //lo q cuenta
    output.textContent = `Total de ítems: ${total}`; //el mensaje y el total de cuantas tareas tienes
});



//3
document.querySelectorAll(".item").forEach((item) => {
    item.dataset.relleno = "false"; 

    item.addEventListener("click", () => {
        const estaRelleno = item.dataset.relleno === "true";
        item.dataset.relleno = (!estaRelleno).toString();
        item.classList.toggle("relleno");
    });
});