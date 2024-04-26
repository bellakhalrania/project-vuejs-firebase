<template>
  <section class="home">
        <div class="content">
          <h3>Hand Picked Book to your door.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quod? Reiciendis ut porro iste totam.</p>
          <router-link to="/BestSales" ><a href="" class="white-btn">discover more</a></router-link>
        </div>
  </section>

  
<!---books-->  
   <section id="product-cards "    data-aos="fade-up" data-aos-duration="1500">
      <div class="cart btn bi bi-cart-plus-fill">({{ cart.length }})</div>
         <div class="container" id="book">
            <h1>books</h1>
            <div class="box">
              <Componentbook
                 v-for="book in books"
                :key="book.id"
                :book="book"
                :premium="premium"
                @add-to-cart="updateCart"
                @remove-from-cart="removeById"
              ></Componentbook> 
            </div>
         </div>
    </section>
<!---end-books-->  
<!---arrivals-->  
  <section>
     <div class="container" id="arrival" data-aos="fade-up" data-aos-duration="1500">
        <h1>New Arrivals</h1>
         <div class="box">
            <BestListe
            v-for="arrival in arrivals"
            :arrival="arrival"
            :key="arrival.id"
            :premium="premium"
            @add-to-cart="updateCart"
            @remove-from-cart="removeById"
           ></BestListe> 
         </div>
      </div>
 </section>
 <!----end-arrivals-->

 <!---about us-->
  <div class="about" data-aos="fade-up" data-aos-duration="1500">
      <div class="about_image">
          <img src="../assets/about.png">
      </div>
      <div class="about_tag">
          <h1>About Us</h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cumque atque dolor corporis 
        architecto. Voluptate expedita molestias maxime officia natus consectetur dolor quisquam illo? 
        Quis illum nostrum perspiciatis laboriosam perferendis? Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Minus ad eius saepe architecto aperiam laboriosam voluptas nobis voluptates 
        id amet eos repellat corrupti harum consectetur, dolorum dolore blanditiis quam quo.
        </p>
        <a href="#" class="about_btn">Learn More</a>
      </div>
  </div>
   <!---end-about us-->
<section class="home-contact">

<div class="content">
   <h3>have any questions?</h3>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque cumque exercitationem repellendus, amet ullam voluptatibus?</p>
   <router-link to="/contact" ><a href="#" class="white-btn">contact us</a></router-link>
</div>

</section>
  <FooterView></FooterView>
</template>


<script>
// @ is an alias to /src

import Componentbook from "@/components/componentbook.vue";
import BestListe from "@/components/BestListe.vue";
import { RouterLink } from "vue-router";
import EventService from "@/services/EventService.js";
import FooterView from "@/components/FooterView.vue";
export default {
  name: "HomeView",
  components: {
    Componentbook,
    BestListe,
    FooterView,
     RouterLink ,
    
},
  data() {
    return {
      books: null, 
      arrivals: null,
      cart: [],
      premium: true,
      
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
      console.log(this.cart);
    },
    removeById(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
    displayCart() {
      // Affiche les IDs des livres dans le panier
      console.log("Cart Contents:", this.cart);

    }

  },
  created() {
   EventService.getEvents().then(reponse => {
   this.books =reponse.data;
   }).catch(error => {
    console.log(error);
   }),
   EventService.getarrivels()
      .then((response) => {
        this.arrivals = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
 },
  
};
</script>
<style scoped>
h1{
  text-align: center;
    font-weight: bold;
    margin-top: 100px;
    color: rgb(12, 9, 4);
    text-shadow: 1px 1px 1px black;
    border-bottom: 2px solid rgb(161, 109, 14);
}
h3 {
  color: #8c2d2d;
  margin: 12px 0;
  text-align: center;
}

/* home section */
.home{
    width: 100%;
    height: 88.5vh;
    display: flex;
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(../assets/background2.jpg);
    background-size: cover;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 0;
    
}

.home .content{
    flex: 1 1 400px;
    margin-left: 60px;
}
.content h3{
    color: white;
    font-size: 60px;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
}
.content h2{
    font-size: 60px;
    color: white;
    text-shadow: 1px 1px 1px black;
    font-weight: bold;
}
.changecontent::after{
    content: ' ';
    color: rgba(161,109,14,1);
    animation: changetext 10s infinite linear;
    font-weight: bold;
}
.content p{
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
}
.content .btn{
    width: 110px;
    height: 38px;
    background-color: #573818;
    color: white;
}
@media screen and (max-width:800px){
    .content h3{
        font-size: 50px;
    }
}
@media screen and (max-width:860px){
    .home{
        height: 120vh;
    }
}
@media screen and (max-width:560px){
    .home{
        height: 100vh;
    }
}
@media screen and (max-width:330px){
    .content h2{
        font-size: 30px;
    }
    .content h3{
        font-size: 30px;
    }
}
.container{
    width: 100%;
    height: 100vh;
    padding: 20px 0;
}
.box {
    width: 95%;
    height: 70vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    overflow: hidden;
    overflow-x: scroll;

}

/* home section end */
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
/*about*/

.about{
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
}

.about .about_image img{
    width: 800px;
}
.about .about_tag p{
    line-height: 22px;
    width: 650px;
    text-align: justify;
    margin-bottom: 15px;
}

.about .about_tag .about_btn{
    padding: 10px 20px;
    background: #a3a8a8;
    color: #fff;
    text-decoration: none;
    position: relative;
    top: 50px;
}
/* about  end */
.home-contact{
   margin-top: 20px;
   margin-bottom:0px ;
}

.home-contact .content{
   max-width: 60rem;
   text-align: center;
   margin:0 auto;
}

.home-contact .content h3{
   font-size: 3rem;
   text-transform: uppercase;
   color:black;
}

.home-contact .content p{
   padding:1rem 0;
   line-height: 1.5;
   color:var(--light-white);
   font-size: 25px;
}
.white-btn{
   display: inline-block;
   margin-top: 1rem;
   padding:1rem 3rem;
   cursor: pointer;
   color:black;
   font-size: 16px;
   border-radius: .5rem;
   text-transform: capitalize;
   background-color: burlywood;
}
.white-btn:hover{
   background-color: white;
   color:black;
   border:solid black;
}
.box-container {
  display: flex;
  flex-wrap: wrap; /* Permet le retour à la ligne si l'espace est insuffisant */
  justify-content: space-between; /* Ajuste l'espace entre les éléments */
}

</style>
