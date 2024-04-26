<template>
  <div class="card">
    <div class="overlay">
      <button type="button" class="btn btn-secondary" title="Quick View">
        <i><img src="#" class="bi bi-person-fill" alt="" width="30px" /></i>
      </button>
      <button type="button" class="btn btn-secondary" title="Add to Wishlist">
        <i><img src="#" class="bi bi-heart-fill" alt="" width="30px" /></i>
      </button>
      <button type="button" class="btn btn-secondary" title="Add to Cart">
        <i><img src="#" class="bi bi-bag-plus" alt="" width="30px" /></i>
      </button>
    </div>
    <div class="card-body">
      <img :src="require(`@/assets/${book.image}`)" alt="Please Wait" />
      <h3>{{ book.title }}</h3>
      <div class="star">
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <h6>
        {{ book.prix
        }}<span> <button @click="addToCart">Add Cart</button></span>
      </h6>
      <i v-bind:style="button"
               v-bind:class="btnremove"
               @click="removeFromCart"
        ></i>
      <RouterLink
           class="event-link"
            :to="{ name: 'EventDetailsView', params: { id: book.id } }"
      >
        <span><a href="#">Learn more</a></span></RouterLink
      >
    </div>
  </div>
</template>
 
 <script>
import { RouterLink } from "vue-router";

export default {
  name: "component-book",
  props: {
    book: Object,
  },
  components: { RouterLink },
  data(){
     return {
      button:{
        margin:"12px 30px 0 0 " ,
        width:"30px"
      },
      btnremove:"bi bi-bag-x",

     }
  },

  methods: {
    addToCart() {
      console.log(this.book.id);
      this.$emit("add-to-cart", this.book.id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.book.id);
    },
  },
};
</script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
/* product cards */
h1 {
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
  color: rgb(47, 41, 31);
  text-shadow: 1px 1px 1px black;
  border-bottom: 2px solid rgba(161, 109, 14, 1);
}
.card {
  background-color: rgb(255, 248, 236);
  box-shadow: 0 0 3px black;
  border-radius: 5px;
  cursor: pointer;
  width: 250px;
  height: 500px;
  text-align: center;
  padding: 5px;
  border: 1px solid #919191;
  margin: auto 20px;
}
.overlay {
  display: block;
  opacity: 0;
  position: absolute;
  top: 10%;
  margin-left: 0;
  width: 70px;
}
.card:hover .overlay {
  opacity: 1;
  margin-left: 5%;
  transition: 0.5s ease;
}
.overlay i {
  background-color: #0f0e0e;
  height: 30px;
  width: 30px;
  font-size: 20px;
  padding: 7px;
  margin: -20%;
  margin-bottom: 5%;
  cursor: pointer;
}
.overlay .btn-secondary {
  background: transparent !important;
  border: none;
  box-shadow: none;
}
h3 {
  color: rgb(30, 26, 26);
  text-shadow: 1px 1px 1px rgb(24, 18, 18);
}
.star .checked {
  color: yellow;
}
p {
  color: #2e1700;
  font-weight: bold;
}
h6 {
  font-size: 20px;
  color: #2e1700;
  font-weight: bold;
}
h6 span button {
  width: 109px;
  height: 26px;
  font-size: 15px;
  background: transparent;
  letter-spacing: 3px;
  border: 2px solid #bbbab8;
  border-radius: 5px;
  float: right;
  font-weight: bold;
  transition: 0.5s ease;
  cursor: pointer;
}
h6 span button:hover {
  background-color: #2e1700;
  color: white;
}
span a {
  display: block;
  float: right;
}
.card-body img {
  width: 150px;
  margin: auto 35px;
}

::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-thumb {
  background: #089da1;
  border-radius: 10px;
}
.btnremove{
  margin-top: 20px;
}

/* product cards end */
</style>
 