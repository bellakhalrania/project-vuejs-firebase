<template>
 
  <div v-if="!isLoggedIn">
    <div class="container-3">
      <div class="row">
         <div class="col-8 ">
           <div class="start-home" >
            <div class="content" >
            <h3>Choose you book Now</h3>
            <h3>Have an acount?</h3>
            <h2><p class="changecontent"></p></h2>
          </div>
          </div>
         </div>
          <div class="col-4 container-start">
            <h1>GET STARTED</h1>
            <button class="btn-start"><a href="#signup"><span @click="showLogin=false">Sign up </span></a></button>
            <button class="btn-start"><a href="#login"><span @click="showLogin=true">Login </span></a></button>
         </div>  
       </div>
    </div>

    <!-----login-->
    <template v-if="showLogin">
      <div id="login" class="form-container">
           <LoginView @loggedIn="isLoggedIn = true"></LoginView>
           <p>No account yet ? <span @click="showLogin=false">Sign up </span></p>
       </div>
    </template>
    <!------or register-->
    <template v-else>
      <div id="signup" class="form-container">
      <SignupView @loggedIn="isLoggedIn = true"></SignupView>
      <p>No account yet ?<span @click="showLogin=true" >Login </span></p>
       </div>
    </template>
  </div>
  <div v-else>
    
    <button class="btn-out" @click="signOut">Sign Out</button>
    <NavBarView></NavBarView>
    <router-view />
   </div>
  
</template>
 <script>
 import NavBarView from "@/components/NavBarView.vue";
 import SignupView from "@/components/SignupView.vue";
 import LoginView from "@/components/LoginView.vue";
 import { auth } from './firebase/firebase.js'
 import { signOut } from 'firebase/auth'
 export default {
   components: {
    NavBarView,
    SignupView,
    LoginView
   },
   data (){
    return{
      isLoggedIn: false,
      showLogin: true,
    }
   },
  methods: {
    signOut() {
      signOut(auth)
      .then(() => {
        this.isLoggedIn = false
      })
    }
  }
 }
</script>
<style>
.form-container{
    align-items: center;
    width: 450px;
    height: 450px;
    border: 2px solid rgba(31, 28, 28, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    transform: .3s;
    display: flex;
    flex-direction: column;
    margin-left: 500px;
    margin-bottom: 60px;
    margin-top: 250px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.form-container span{text-decoration:underline;
  cursor:pointer;
  color:blue;
}



.btn-out{
    margin-left: 1380px ;
    position: fixed;
    z-index: 1000;
    background-color:rgb(211, 143, 59);
  color: #fff;

}
/* Style for the getstarted container */
.container-3{
  text-align: center;
  width: 100%;
  height: 90vh;
  margin-bottom: 200px;
 

}

.btn-start {
  background-color:rgb(211, 143, 59);
  color: #fff;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  width: 200px;
  height: 50px;
}

.btn-start span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.btn-start a {
  text-decoration: none;
    color: #fff;
}

.btn-start:hover span {
  transform: translateY(-5px);
}
.btn-start:nth-child(1) {
  background-color:rgb(211, 143, 59);
}
.btn-start:nth-child(2) {
  background-color:rgba(211, 143, 59, 0.703);
}
.start-home{
  background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(assets/background.jpg) ;
  height: 100vh;
  width: 100%;
  display: flex;
  background-size: cover;
  align-items:center;
  flex-wrap: wrap;
  position: relative;
  z-index: 0;
}
.start-home .content{
    flex: 1 1 400px;
    margin-left:0 ;
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
@media screen and (max-width:330px){
    .content h2{
        font-size: 30px;
    }
    .content h3{
        font-size: 30px;
    }
}

.changecontent::after{
    content: ' ';
    color: rgb(211, 143, 59);
    animation: changetext 6s infinite linear;
    font-weight: bold;
}
@keyframes changetext{
    0%{content: "SIGN IN";}
    20%{content: "LOGIN";}
    50%{content: "SIGN IN";}
    60%{content: "LOGIN";}
    100%{content: "SIGN IN";}
}
.container-start{
  padding-top: 270px;
  width: 100%;
  background-color: rgba(236, 229, 221, 0.498);
}


</style>
