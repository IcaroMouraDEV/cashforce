<template>
  <div class="page">
    <header class="header">
      <p></p>
      <p></p>
    </header>
    <div class="table">
      <h2>
        <span><img src="../assets/nfe.png" alt="nfe" /></span>Notas fiscais
      </h2>
      <p>Visualize as notas fiscais que você tem.</p>
      <table>
        <!-- <thead> -->
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
          <th></th>
        </tr>
        <!-- </thead> -->
        <!-- <tbody> -->
        <tr v-for="order of orders" :key="order.id" class="item">
          <td class="left">{{ order.nNf }}</td>
          <td>{{ order.buyer.name }}</td>
          <td>{{ order.provider.name }}</td>
          <td>{{ order.emissionDate }}</td>
          <td class="green">
            {{
              Number(order.value).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </td>
          <td class="green status">
            {{
              status[
                order.orderStatusBuyer === null ? 0 : order.orderStatusBuyer
              ]
            }}
          </td>
          <td class="right">
            <button class="status">Dados do cedente</button>
          </td>
        </tr>
        <!-- </tbody> -->
      </table>
    </div>
  </div>
</template>

<script>
import Order from "../services/orders";
import { statusMapper } from "../utils/status";

export default {
  name: "OrdersNFE",

  data() {
    return {
      orders: [],
      status: statusMapper,
    };
  },

  methods: {
    get() {
      Order.get().then((res) => {
        this.orders = res.data;
      });
    },
  },

  mounted() {
    this.get();
  },
};
</script>
