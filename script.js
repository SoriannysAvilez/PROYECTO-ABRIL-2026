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
