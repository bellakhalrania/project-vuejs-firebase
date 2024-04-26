<template>
    <div>
      <form @submit.prevent="signUp">
        <div class="top">
          <h4>Signup</h4>
        </div>
        <div class="input-field">
          <input type="text"  class="input"   placeholder="Username" required v-model="username">
       </div>
       <div class="input-field">
          <input type="email"  class="input"  placeholder="Email"    required v-model="email">
        </div>
        <div class="input-field">
          <input type="password" class="input" placeholder="Password" required v-model="password">
        </div>
        <div class="input-field">
          <button class="submit-2 input">Sign Up</button>
        </div>
          <div class="two-col">
                <div class="one">
                    <input type="checkbox" id="check">
                    <label for="check">Remember Me</label>
                </div>
                <div class="two">
                    <label for="#">Forgot Password</label>
                </div>

            </div>
    </form>
  
  
    </div>
  
  </template>
  
  
  
  <script>
  import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase.js'
  
  export default {
    name:'SignupView',
    emits: ['loggedIn'],
    data() {
      return {
        username: '',
        email:    '',
        password: ''
      }
    },
    methods: {
      signUp() {
        // console.log('Username:',this.username)
        //console.log('Email:',   this.email)
        //console.log('Password:',this.password)
      createUserWithEmailAndPassword(auth,this.email,this.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: this.username
        })
        .then(() => {
            this.$emit('loggedIn')
        })

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
h4{
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
    color: #121212;
    font-size: small;
    margin-top: 10px;
}
.one{
    display: flex;
}
label a{
    text-decoration: none;
    color: #131010;
}
  </style>
  