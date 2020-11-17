<template>
  <div>
    <div>
      <ul>
        <li>nombre: {{ getPoleraById.data.nombre }}</li>
        <li>talla: {{ getPoleraById.data.talla }}</li>
        <li>precio: {{ getPoleraById.data.precio }}</li>
        <li>
          cantidad:
          <select name="" id="" v-model="cant">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option></select
          >
        </li>
      </ul>
    </div>

    <h4>Total: {{ total }}</h4>

    <button @click="comprar">COMPRAR ESTA VAINA</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  name: "Detalle",
  data() {
    return {
      cant: 1,
    };
  },
  methods: {
    ...mapActions(["comprarPolera"]),
    comprar() {
      const polera = Object.assign({}, this.getPoleraById);
      polera.cant = this.cant;
      this.comprarPolera(polera);
    },
  },
  computed: {
    ...mapGetters(["getPolera"]),
    getPoleraById() {
      const id = this.id;
      return this.getPolera(id) || { data: {} };
    },
    total() {
      const polera = this.getPoleraById;
      const precio = polera.data.precio;
      const cantidad = this.cant;
      return precio * cantidad;
    },
  },
};
</script>
