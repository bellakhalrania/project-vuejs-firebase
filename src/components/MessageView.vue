<template>
      <!-- contact  -->
<div class="container" id="contact" data-aos="fade-up" data-aos-duration="1500">
    <form class="review-form" @submit.prevent="onSubmit">
      <h1>Laisser un commentaire</h1>
      <div class="row" >
          <div class="col-md-4 py-1 py-md-0">
              <div class="form-group">
                  <input type="text" class="form-control" id="name usr" v-model="name"  placeholder="Name"/>
              </div>
          </div>
          <div class="col-md-4 py-1 py-md-0">
              <div class="form-group">
                  <input type="number" class="form-control" id="phone phn" v-model="phone" placeholder="Phone" />
              </div>
         </div>
         <div class="col-md-4 py-1 py-md-0">
              <div class="form-group">
                 <input type="text" class="form-control" id="email eml" v-model="email" placeholder="Email" />
             </div>
         </div>
     </div>
      <div class="form-group">
         <textarea id="review comment" class="form-control" rows="5" v-model="review" placeholder="Message"></textarea>
      </div>
       <input type="submit" id="messagebtn" class="button" value="Send Message" />
  </form>
  </div>
      <!-- contact end -->
</template>
<script>

export default {
   name: "MessageView",
   data() {
    return {
        name: '',
        review: '',
        email: '',
        phone: ''
    }
   },
   methods: {
    onSubmit() {
        if (
            this.name === '' ||
           this.review === '' ||
           this.email === '' ||
           this.phone === ''
      ) {
        alert("Commentaire incomplet. SVP remplissez les champs.");
        return;
      }
        let productMessage ={
            name: this.name,
           review: this.review,
           email: this.email,
           phone: this.phone
        }
      this.$emit('message-submitted',productMessage);
           this.name = '',
           this.review= '',
           this.email= '',
           this.phone= ''
    },
  },  
    
}
</script>
<style>
/* contact */

#contact h1{
    text-align: center;
    font-weight: bold;
    padding-top: 105px;
    color: rgba(161,109,14,1);
    text-shadow: 1px 1px 1px black;
    border-bottom: 2px solid rgba(161,109,14,1);
}
#contact input{
    background-color: rgb(215, 197, 164);
}
#contact input::placeholder{
    color: white;
}
#contact textarea{
    background-color:rgb(215, 197, 164);
}
#contact textarea::placeholder{
    color: white;
}
#messagebtn{
    text-align: center;
    margin-right:50%;
    margin-left: 45%;
}
#messagebtn button{
    width: 200px;
    height: 30px;
    letter-spacing: 3px;
    font-weight: bold;
    background: transparent;
    border: 2px solid rgb(37, 35, 35);
    color: rgb(17, 16, 16);
    transition: 0.5s;
    cursor: pointer;
}
#messagebtn button:hover{
    background-color: rgb(220, 212, 198);
}
/* contact */
</style>
