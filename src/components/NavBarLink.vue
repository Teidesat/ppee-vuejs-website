<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <router-link
    :to="path"
    class="nav-link"
    :class="{ active: isActive }"
    style="font-size: 70% !important"
  >
    {{ name.toUpperCase() }}
  </router-link>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  props: {
    name: String,
    path: String,
  },
  computed: {
    isActive() {
      return useRoute().path === this.path;
    },
    // nameCapitalized() {
    //   return this.name.toUpperCase;
    // },
  },
};
</script>

<style scoped>
/* $primary: #487eec,
$nav-link-light: #487ef6
$nav-link-hover-light: #52e2aa
$nav-link-active-light: #19e6b9 */
.navbar-light .navbar-nav .nav-link {
  color: #487ef6;
}

.navbar .nav-item:hover .nav-link {
  color: #52e2aa;
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: #19e6b9;
}
@import "bootstrap";
</style>
