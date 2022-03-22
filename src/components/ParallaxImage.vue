<template>
  <div class="parallax" :style="style_bi">
    <div v-if="this.central_src != undefined" class="title_logo">
      <img :src="require(`@/assets/images/${this.central_src}`)" />
    </div>
  </div>
</template>

<script>
// const bi = require(`@/assets/images/${this.background_src}`);
export default {
  props: {
    central_src: String,
    background_src: String,
    height_img: String,
  },
  data() {
    return {
      // central: central,
      style_bi: {
        "background-image":
          "url(" + require("@/assets/images/" + this.background_src) + ")",
        // backgroundImage: this.background_src,
        "min-height": this.height_img,
      },
    };
  },
  computed: {},
};
</script>

<style>
.parallax {
  margin: 0;

  min-height: 100%;
  position: relative;
  /* opacity: 0.65; */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media only screen and (max-device-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}
.title_logo {
  position: absolute;
  left: 0;
  top: 40%;
  width: 100%;
  text-align: center;
}
</style>
