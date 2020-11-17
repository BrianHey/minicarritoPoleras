import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    poleras: [],
    carrito: [],
  },
  mutations: {
    GET_POLERAS(state, poleras) {
      state.poleras = poleras;
    },
    ADD_TO_CART(state, polera) {
      state.carrito.push(polera);
    },
    INCREMENTAR(state, carrito) {
      state.carrito = carrito;
    },

    DECREMENTAR(state, carrito) {
      state.carrito = carrito;
    },
  },
  actions: {
    getPoleras({ commit }) {
      firebase
        .firestore()
        .collection("poleras")
        .onSnapshot((data) => {
          const poleras = [];
          data.forEach((doc) => {
            poleras.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          commit("GET_POLERAS", poleras);
        });
    },

    addToCart({ commit, state }, id) {
      const polera = state.poleras.find((p) => p.id == id);
      polera.cant = 1;
      commit("ADD_TO_CART", polera);
    },

    incrementar({ commit, state }, id) {
      const carrito = state.carrito.map((p) => {
        if (p.id == id) {
          p.cant++;
          return p;
        }
        return p;
      });
      commit("INCREMENTAR", carrito);
    },
    decrementar({ commit, state }, id) {
      const carrito = state.carrito;
      const polera = carrito.find((p) => p.id == id);
      polera.cant == 1
        ? commit(
            "DECREMENTAR",
            carrito.filter((p) => p.id !== id)
          )
        : commit(
            "DECREMENTAR",
            carrito.map((p) => {
              if (p.id == id) {
                p.cant--;
                return p;
              }
              return p;
            })
          );
    },

    comprar({ state }) {
      state.carrito.forEach((p) => {
        firebase
          .firestore()
          .collection("poleras")
          .doc(p.id)
          .update({ stock: p.data.stock - p.cant });
      });
    },

    comprarPolera({ state }, p) {
      console.log(p)
      firebase
        .firestore()
        .collection("poleras")
        .doc(p.id)
        .update({ stock: p.data.stock - p.cant });
    },
  },
  getters: {
    totalCarrito: (state) => {
      let total = 0;
      state.carrito.forEach((p) => {
        total += p.cant * p.data.precio;
      });
      return total;
    },

    getPolera: (state) => (id) => {
      console.log(id);
      return state.poleras.find((p) => p.id == id);
    },
  },
});
