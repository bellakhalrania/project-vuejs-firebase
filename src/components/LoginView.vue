<template>
    <div>
      <form @submit.prevent="login" >
          <div class="top">
                <header>Login</header>
            </div>
           <div class="input-field">
            <input type="email"    placeholder="Email"  class="input"   required v-model="email">
            <i class="fa-solid fa-user"></i>
           </div>
           <div class="input-field">
            <input type="password" placeholder="Password"  class="input" required v-model="password">
            <i class="fa-solid fa-lock"></i>
           </div>
           <div class="input-field">
             <button class="submit-2 input">Log in</button>
          </div>
          <div class="two-col">
                <div class="one">
                    <input type="checkbox" id="check">
                    <label for="check">Remember Me</label>
                </div>
                <div class="two">
                    <label for="#"><a href="#">Forgot Password</a></label>
                </div>

            </div>
       </form>
    </div>
  
  </template>
  
  
  
  <script>
  import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.js'
  
  export default {
    name:'LoginView',
    data() {
      return {
        email:    '',
        password: ''
      }
    },
    methods: {
      login() {
        //console.log('Email:',   this.email)
        //console.log('Password:',this.password)
      signInWithEmailAndPassword(auth,this.email,this.password)
      .then(() => {
        this.$emit('loggedIn')
      })  
    }
    }
    
  }
    
  </script>

<style>
.input-field .input:hover{
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
header{
    color: #181515;
    font-size: 30px;
    display: flex;
    justify-content: center;
    padding: 10px 0 10px 0;
}
.input-field .input{
    height: 45px;
    width:290px;
    border: none;
    border-radius: 30px;
    color: #332f2f;
    font-size: 15px;
    padding: 0 0 0 45px;
    background: rgba(26, 23, 23, 0.1);
    margin-top: 12px;
    outline: none;
}
::-webkit-input-placeholder{
    color: #322f2f;
}
.submit-2{
    border: none;
    border-radius: 30px;
    width: 100%;
    color: black;
    transition: .3s;
    cursor: pointer;
    margin: 17px auto 20px auto;
}
.submit-2:hover{
    box-shadow: 1px 5px 7px 1px rgba(0,0,0, 0.2);
}
.two-col{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #000000;
    font-size: small;
    margin-top: 10px;
}
.one{
    display: flex;
}
label a{
    text-decoration: none;
    color: #070707;
}
  </style>