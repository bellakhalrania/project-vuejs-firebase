<template>
      
  <div v-if="books" class="details">
      <div class="about_image">
         <img :src="require(`@/assets/${books.image}`)">
      </div>
      <div class="details-container">
        <h1>More details</h1>
        <h1>{{ books.title }}</h1>
        <p>{{ books.date }}</p>
        <p>{{ books.organizer }}</p>
        <p>{{ books.prix }}</p>
        <p>{{ books.langue }}</p>
        <p>{{ books.description }}</p>
        <a href="#" class="about_btn">Learn More</a>
      </div>
  </div>  
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
name: "EventDetailsView",
props: [
  "id"
],
data() {
  return {
books: null,
  }; 
},
created() {
// Récupérer les informations d'un event à partir de son ID
EventService.getEvent(this.id).then(reponse => {
console.log('books:',reponse.data);
this.books =reponse.data;
});
},

}
</script>

<style scoped>
h1{
color: black;
}
/*about*/
.details {
display: flex;
padding-top: 100px;
align-items: center;
width: 80%;
margin-left: 20px;
}
.about_image {
margin-right: 20px;

}
.details-container h1{
text-align: center;

}
.details-container p{
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 15px;
}

/* about  end */
</style>