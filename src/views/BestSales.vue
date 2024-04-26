<template>
  <div class="liste" data-aos="fade-up" data-aos-duration="1500">
    <div class="cart btn bi bi-cart-plus-fill">({{ cart.length }})</div>
    <h1> New Arrivals</h1>
    <div class="liste-card">
     <BestListe 
       v-for="arrival in arrivals"
       :arrival="arrival"
       :key="arrival.id"
       :premium="premium"
       @add-to-cart="updateCart"
       @remove-from-cart="removeById" ></BestListe>
      </div>
  </div>
     <FooterView></FooterView>
 </template>
 
 <script>
 import BestListe from "@/components/BestListe.vue";
 import FooterView from "@/components/FooterView.vue";
 import EventService from "@/services/EventService.js";
 
 export default {
   name: "BestSales",
   components: {
     FooterView,
      BestListe
 },
 data() {
    return {
      arrivals: null,
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeById(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
  created() {
    EventService.getarrivels()
      .then((response) => {
        this.arrivals = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


 };
 </script>
 
 <style scoped>
 .cart {
  float: right;
  border: 1px solid #d8d8d8;
  padding: 10px 30px;
  margin:25px 20px auto 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
 h1{
  text-align: center;
    font-weight: bold;
    margin-top: 90px;
    margin-bottom: 12px;
    color: rgb(12, 9, 4);
    text-shadow: 1px 1px 1px black;
    border-bottom: 2px solid rgb(161, 109, 14);
}
.liste{
  padding-top: 56px;
}
 .liste-card{
  display: flex;
  margin: auto 50px;
  align-items: start;
 }
 </style>