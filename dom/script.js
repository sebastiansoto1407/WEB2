const btn = document.querySelector('[data-form-btn]')

console.log(btn);

const createTask =(evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
    //funcion para recuperar el texto de mi input

    const value= imput.value;
    const list= document.querySelector('[data-list]')
    const task= document.createElement('li')
    task.classList.add('card');
    input.value='';
    const contenido=''
}

btn.addEventListener('click', createTask)

