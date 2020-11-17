<template>
  <div class="home">
    <div v-for="(polera, i) in poleras" :key="i">
      <ul>
        <li>{{ polera.data.nombre }}</li>
        <li>{{ polera.data.talla }}</li>
        <li>{{ polera.data.precio }}</li>
        <li>{{ polera.data.stock }}</li>

        <li>
          <button @click="addToCart(polera.id)">Agregar al carrito</button>
        </li>
        <li>
          <router-link :to="'/detalle/' + polera.id">
            <button>Ir a vista de detalle</button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["addToCart"]),
    // addCart(id)
  },
  computed: {
    ...mapState(["poleras"]),
  },
};
</script>
