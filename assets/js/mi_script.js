//datos
const tareas = [
  {
    id: 1,
    descripcion: "Comprar leche",
    realizada: false,
  },
  {
    id: 2,
    descripcion: "Llamar al médico",
    realizada: false,
  },
  {
    id: 3,
    descripcion: "Enviar correo a Juan",
    realizada: false,
  },
  {
    id: 4,
    descripcion: "Limpiar la casa",
    realizada: true,
  },
];

//elementos
  const input = document.querySelector("#inputTarea");
    const botonAgregar = document.querySelector("#botonAgregar");
    const tabla = document.querySelector("#listaTareas");
    const totalTareas = document.querySelector("#total");
    const totalRealizadas = document.querySelector("#realizadas");

//contadores
const actualizaContadores = () => {
  totalTareas.innerText = tareas.length;
  const soloRealizadas = tareas.filter((tarea) => tarea.realizada);
  totalRealizadas.innerText = soloRealizadas.length;
};


//Agrega una nueva tarea
botonAgregar.addEventListener("click", () => {

  //validar entrada vacia
  if(!input.value.trim()){
    alert('Ingresa una tarea válida')
    return;
  }

  //prepara la tarea nueva
  const nuevaTarea = {
    id: Math.floor(Math.random() * 500) + 1,
    descripcion: input.value,
    realizada: false,
  };

  //agrega la tarea al arreglo
  tareas.push(nuevaTarea);

  //limpiar el input
  input.value = "";

  //mostrar el listado de tareas
  mostrarTareas(tareas);
});

//funcion para mostrar las tareas
const mostrarTareas = (arr) => {
  //declarar el template
  let template = "";

  for (const tarea of arr) {
    template += `
    <tr>
                <td>${tarea.id}</td>
                <td>${tarea.descripcion}</td>
                <td>
                    <input type="checkbox" ${
                      tarea.realizada ? "checked" : ""
                    } data-id="${tarea.id}">
                </td>
                <td>    
                    <button onclick="borrarTarea(${tarea.id})">❌</button>
                </td>
            </tr>
`;
  }

  //insertar el html
  tabla.innerHTML = template;
  actualizaContadores();
};

//borrar tarea
const borrarTarea = (id) => {
  //busco el indice en el listado
  const indice = tareas.findIndex((tarea) => tarea.id === id);
  //ocupo splice para borrar el objeto
  tareas.splice(indice, 1);
  //muestra el array actualizado
  mostrarTareas(tareas);
};

//actualizar realizada evento.
tabla.addEventListener("change", (event) => {
  if(event.target.type === "checkbox"){
    const id = Number(event.target.dataset.id)
    actualizarTarea(id)
  }
})

//funcion para realizar el cambio de estado a realizada.
const actualizarTarea = (id) => {
  //busca el indice
  const indice = tareas.findIndex((tarea) => tarea.id === id);
  //reemplaza al valor contrario
  tareas[indice].realizada = !tareas[indice].realizada;
  //muestra la lista actualizada
  mostrarTareas(tareas);
  
};

//mostrar las tareas
mostrarTareas(tareas);


