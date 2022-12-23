<template>
  <div class="propostas">
    <aside class="financiador">
      <aside class="fornecedor">
        <div class="menu-hero">
          <div class="hero">
            <img src="./assets/logo.png" alt="logo cashforce" />
          </div>
          <div class="row-item">
            <img src="./assets/nfe_green.png" alt="nfe" />
            <h3>Notas fiscais</h3>
          </div>
        </div>
      </aside>
    </aside>
    <OrdersVue />
  </div>
</template>

<style>
@import "./assets/app.css";
</style>

<script>
import OrdersVue from "./components/Orders.vue";

export default {
  name: "App",
  components: {
    OrdersVue,
  },
};
</script>
