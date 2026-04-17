//CONFIGURACION DE LOS SLIDER DE LAS SECCIONES 

const enlaces = document.querySelectorAll(".navegacion-principal a"); //almacenar referencias de los elemnteos  contenedor barra nav

const contenedor = document.querySelector(".carousel-container"); //contenedor ompleto del main


enlaces.forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault(); //previene que el navegador actue forma prederminada

    const indice = Number(enlace.dataset.slide);

    contenedor.style.transform =
      `translateX(-${indice * 100}%)`;
  });
});

//MARCAR MENU ACTIVO
enlaces.forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();

    enlaces.forEach(a => a.classList.remove("activo"));
    enlace.classList.add("activo");

    const i = enlace.dataset.slide;
    contenedor.style.transform = `translateX(-${i * 100}%)`;
  });
});


//AUTOPLAY VIDEO
   // Buscamos el elemento (esto se ejecuta inmediatamente al cargar el script)
const elementoVideo = document.getElementById("videoPlatos");

if (elementoVideo) {
    // Si el ID está en el div, buscamos el video adentro; si no, usamos el elemento mismo
    const videoReal = elementoVideo.tagName === "VIDEO" ? elementoVideo : elementoVideo.querySelector("video");

    if (videoReal) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // El video entró en el área visible
                    videoReal.play().catch(err => {
                        console.log("El navegador requiere que el video esté 'muted' para autoplay.");
                    });
                } else {
                    // El video salió del área visible
                    videoReal.pause();
                }
            });
        }, { threshold: 0.3 }); // Se activa cuando se ve el 30% del video

        observer.observe(videoReal);
    } else {
        console.error("No se encontró una etiqueta <video> dentro de #videoPlatos");
    }
} else {
    console.error("No se encontró el elemento con ID 'videoPlatos'");
}

//AUDIO PAG
const audio = document.getElementById("musicaFondo");
const boton = document.getElementById("audioBtn");

// intenta reproducir al cargar
window.addEventListener("load", () => {
    audio.volume = 0.5;
    audio.play().catch(() => {
        console.log("Autoplay bloqueado por el navegador");
    });
});

// alternar audio
boton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        boton.textContent = "🔊";
    } else {
        audio.pause();
        boton.textContent = "🔇";
    }
});