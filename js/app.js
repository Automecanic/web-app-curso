//sutilitzaem esta funció para esperar a que carregue la pagina
document.addEventListener("DOMContentLoaded", function () {
    //variables constants
    const boton = document.getElementById("btnSaludar");
    const parrafo = document.getElementById("resultado");
    const parrafo2 = document.getElementById("resultado2");
    //funció per saludar
    function saluco(nombre) {
        return `¡Hola, ${nombre}!`;
    }
    // Escuchar clic
    if (boton) {

        boton.addEventListener("click", function () {
            parrafo.textContent = "¡Hola desde JavaScript!";
            let nombre = prompt("¿Cómo te llamas?");
            if (nombre) {
                parrafo2.textContent = saluco(nombre);
            } else {
                parrafo2.textContent = "¡Hola, invitado!";
            }
        });

    } else {
        console.error("No se encontró el botón con id 'btnSaludar'");
    }
    //practica dos 
    const lista = document.querySelector("#lista-tareas");
    const botonTarea = document.querySelector("#btn-agregar");
    const botonLimpiar = document.querySelector("#btn-limpiar");

    botonTarea.addEventListener("click", function () {
        // 1. Pide la tarea al usuario
        const tarea = prompt("¿Qué tarea quieres añadir?");

        // 2. Si no canceló ni dejó vacío
        if (tarea && tarea.trim() !== "") {
            // 3. Crea un <li>
            const li = document.createElement("li");
            li.style.cursor = "pointer";
            li.style.padding = "0,5rem";
            li.style.borderBottom = "1px solid #fff";
            li.textContent = tarea;
            // Al hacer clic en el <li>, ¡elimínate a ti mismo!
            li.addEventListener("click", function () {
                this.remove(); // "this" es el <li> clickeado
            });


            // 4. Añade el <li> a la <ul>
            lista.insertBefore(li, lista.firstChild);
        }
    });
    botonLimpiar.addEventListener("click", function () {
        lista.innerHTML = "";// Elimina todo el contenido de la lista
    });
    const formulario = document.querySelector("#formulario-contacto");
    const mensajeExito = document.querySelector("#mensaje-enviado");

    // ejercicio tres
    formulario.addEventListener("submit", function (evento) {
        // 1. Evita que la página se recargue
        evento.preventDefault();

        // 2. Obtén los valores
        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const mensaje = document.querySelector("#mensaje").value;

        // Dentro del evento submit, antes del if
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const textarea = document.querySelector("#mensaje");
        const contador = document.querySelector("#contador");

        textarea.addEventListener("input", function () {
            const longitud = this.value.length;
            contador.textContent = `${longitud} / 200 caracteres`;

            if (longitud > 200) {
                contador.style.color = "red";
            } else {
                contador.style.color = "black";
            }
        });

        if (!nombre.trim()) {
            alert("Por favor, ingresa tu nombre.");
            return;
        }
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un email válido.");
            return;
        }
        if (!mensaje.trim()) {
            alert("El mensaje no puede estar vacío.");
            return;
        }
        // 3. Valida (básico)
        if (nombre && email && mensaje) {
            console.log("Formulario válido:", { nombre, email, mensaje });

            // 4. Muestra mensaje de éxito
            mensajeExito.style.display = "block";

            // 5. Limpia el formulario
            formulario.reset();

            // 6. Oculta el mensaje después de 3 segundos
            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 3000);
        }
    });
});