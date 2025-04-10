const input = document.querySelector("#newItem"); //llamado al html
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const toggleBtn = document.querySelector("#toggleBtn");
const countBtn = document.querySelector("#countBtn");
const output = document.querySelector("#output");


function crearItem(texto) { //creamos item
    const li = document.createElement("li"); 
    li.textContent = texto; //asigna al texto 
    li.classList.add("item", "task"); //estamos poniendo estilos visuales 

    

    li.addEventListener("dblclick", () => { //un llamada con clicks
        taskList.removeChild(li);  //se elimina si se clikea
    });

    return li; //va a retornar
}

addBtn.addEventListener("click", () => { //una llamada con clicks
    const texto = input.value.trim(); //texto, trim se elimina expacios 

    if (texto === "") {  
        alert("por favor escribe una tarea.");
        return;
    }

    const nuevoItem = crearItem(texto); 
    taskList.appendChild(nuevoItem);

    input.value = ""; //limpia                               
});