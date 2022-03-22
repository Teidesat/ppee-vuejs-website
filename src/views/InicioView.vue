<template>
  <!-- <Inicio msg="Welcome to Your Vue.js App" /> -->
  <!-- <div> -->
  <ParallaxImage
    :central_src="'titulo_teidesat.png'"
    :background_src="'Fondo-Teidesat.png'"
  ></ParallaxImage>
  <section class="wide_paragraph py-7 text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h4 class="text-blue">A la velocidad de la luz</h4>
          <p class="text-blue h5 my-4">
            TEIDESAT es una iniciativa de estudiantes cuyo objetivo es diseñar,
            fabricar, poner en órbita y operar el primer nanosatélite de
            estudiantes de universidades canarias, el TEIDESAT-I.
          </p>
          <router-link to="/contacto" class="btn btn-primary px-4 py-3 bold"
            >INICIA EL CONTACTO</router-link
          >
        </div>
      </div>
    </div>
  </section>
  <ParallaxImage
    :background_src="'pexels-spacex-23781-scaled.jpg'"
    :height_img="'20%'"
  ></ParallaxImage>
  <section class="wide_paragraph py-7 bg-blue text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h3 class="text-white">
            Site under renovation<br /><br />
            🚧🚧🚧🚧🚧
          </h3>
          <p class="text-white h4 my-4">
            ¡Bienvenidos a nuestra web! Muchas gracias por su interés en nuestro
            proyecto. Nos encontramos realizando grandes cambios que se irán
            publicando poco a poco. La aventura continúa.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="wide_paragraph py-7 text-blue text-left">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h1>Misión</h1>
          <p class="text-left h4 my-4">
            Nuestro objetivo es diseñar, fabricar, poner en órbita y operar el
            primer nanosatélite de estudiantes de universidades canarias, el
            TEIDESAT-I. Y nuestra misión es establecer comunicación óptica entre
            órbita baja y la superficie de la Tierra.
          </p>
          <router-link to="/mision" class="btn btn-primary px-7 py-3 bold"
            >EXPLORA</router-link
          >
        </div>
        <div class="col-sm">
          <img
            class="img-fluid rounded"
            src="../assets/images/pexels-andrea-piacquadio-3846390-scaled.jpg"
          />
        </div>
      </div>
    </div>
  </section>
  <ParallaxImage
    :background_src="'iss_view.jpg'"
    :height_img="'20%'"
  ></ParallaxImage>
  <section class="wide_paragraph py-7 text-blue text-left">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <img class="img-fluid" src="../assets/images/Webinar_Stories3.png" />
        </div>
        <div class="col-sm offset-sm-1 py-7 my-5">
          <h2 text-blue>Novedades</h2>
          <p class="text-left h4 my-4">
            ¡Inauguramos este otoño con las Open House Sessions! 🤩una
            iniciativa de Teidesat en formato online a través de la cual daremos
            a conocer nuestra misión actual en el espacio 🧑‍🚀⭐️✨ así como
            información acerca de nuestras propuestas académicas. <br /><br />
            La primera sesión será el 20 de Octubre a través de la plataforma
            meet de google, con un horario de mañana (10:00 – 11:00) y otro de
            tarde (18:00 – 19:00). 💫🔭😊
          </p>
          <a
            class="btn btn-primary px-7 py-3 bold"
            href="https://www.instagram.com/p/CGDc3I6hPhm/"
            >DESCUBRE MÁS</a
          >
        </div>
      </div>
    </div>
  </section>
  <footer class="wide-paragraph py-5 text-white bg-primary" role="contentinfo">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h1 class="text-white">Unimos fuerzas</h1>
          <br />
          <p class="h5 text-white">
            Cada vez son más los colaboradores y patrocinadores que deciden
            unirse a la iniciativa de poner en órbita el TEIDESAT-01 . Las
            propuestas que nos llegan para propulsar el proyecto vienen en toda
            clase de formatos. Si eres una empresa o asociación de cualquier
            clase, y quieres aportar con tu granito de arena, no dudes en
            participar de la familia de TEIDESAT, estaremos encantados de
            escuchar lo que tienes que decir.
          </p>
          <img
            class="img-fluid"
            src="../assets/images/PATROCINADORES_2_1.png"
          />
        </div>
      </div>
    </div>
    <!-- <a class="btn btn-sm fade-half back-to-top inner-link" href="#"
      ><i class="fa fa-angle-up"></i
    ></a> -->
  </footer>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import Inicio from "@/components/Inicio.vue";
import ParallaxImage from "@/components/ParallaxImage.vue";

export default {
  name: "InicioView",
  components: {
    ParallaxImage,
    // Inicio,
  },
};
</script>

<style>
@import "bootstrap";
@import "@/assets/sass/spacing.css";
@import "@fontsource/raleway";
.text-blue {
  color: #487eec;
}

.bg-primary {
  background-color: #487eec;
}

.bg-blue {
  background-color: #487ef6 !important;
}

.btn {
  -primary: hover;
  color: #fff;
  background-color: #52e1ab;
  border-color: #3db688;
}

.btn-primary {
  background-color: #487eec;
  font-weight: bold;
}

.wide_paragraph {
  /* font-size: 90%; */
  overflow: hidden;
  width: 100vw;
  /* // text-align: center; */
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}

.contenedor {
  height: 100%;
  width: 100%;
  display: flex;
  /* // position: fixed; */
  align-items: center;
  justify-content: center;
  color: antiquewhite;
}
</style>
