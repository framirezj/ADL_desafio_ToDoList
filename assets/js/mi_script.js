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

botonAgregar.addEventListener("click", () => {
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
                    <input type="checkbox" ${tarea.realizada ? 'checked': ''}>
                    <button>❌</button>
                </td>
            </tr>
`;
  }

  //insertar el html
  tabla.innerHTML = template;
};

//mostrar las tareas
mostrarTareas(tareas);