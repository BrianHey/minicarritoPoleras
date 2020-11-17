<template>
  <div class="about">
    <div v-for="(polera, i) in carrito" :key="i">
      <ul>
        <li>nombre: {{ polera.data.nombre }}</li>
        <li>talla: {{ polera.data.talla }}</li>
        <li>precio: {{ polera.data.precio }}</li>
        <li>cantidad: {{ polera.cant }}</li>
        <li>
          <button @click="incrementar(polera.id)">+</button>
          <button @click="decrementar(polera.id)">-</button>
        </li>
      </ul>
    </div>

    <h4>Total: {{totalCarrito}}</h4>

    <button @click="comprar">COMPRAR ESA VAINA</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "About",
  methods: {
    ...mapActions(["addToCart", "incrementar", "decrementar", "comprar"]),
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["totalCarrito"]),
  },
};
</script>
