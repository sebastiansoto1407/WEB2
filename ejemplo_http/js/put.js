const putData = () => {
    const update = {
        titulo: "Actualizado",
        descripcion: "actualizado",
        fecha: new Date().toISOString()
    };

    fetch(`${API_URL}/07a5`, { // Cambiado a backticks para interpolación
        method: "PUT",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json" 
        },
        body: JSON.stringify(update)
    })
    .then(response => { 
        if (!response.ok) {
            throw new Error(`Error en la respuesta estado: ${response.status}`);
        }
        return response.json();
    })
    .then(data => showResult(data))
    .catch(error => showResult(error.message, true));
};