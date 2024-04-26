<template>
  
    <nav class="navbar navbar-expand-md" id="navbar">
            <!-- Brand -->
            <a class="navbar-brand" href="#" id="logo">Bookly</a>
          
            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span><i class="bi bi-list"></i></span>
            </button>
          
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <!-- dropdown -->
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                     Category
                    </a>
                    <div class="dropdown-menu menu">
                        <a :href="book" class="dropdown-item">books</a>
                        <a :href="arrival" class="dropdown-item">New arrivals</a>
                    </div>
                </li>
                <!-- dropdown -->
                <li class="nav-item">
                  <router-link to="/BestSales" class="nav-link">shop</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/OrdersView" class="nav-link">orders</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">contact</router-link>
                </li>
              </ul>
            </div>
            <div class="icons">
             
                <img src="" alt="" width="20px" class="bi bi-person-fill"> 
                <img src="" alt="" width="20px" class="bi bi-heart-fill">
                <img src="" alt="" width="24px" class="bi bi-cart-plus-fill">
            </div>
          </nav>
 
</template>

<script>


export default {
   name: "NavBarView"
   ,
   data(){
    return{
      book:"#book",
      arrival:"#arrival"
    }
   }
}
</script>
<style scoped>
/* navbar */
#navbar{
  
    background-color: #fff6ed;
    padding-left: 60px;
    padding-right: 60px;
    font-weight: bold;
    position: fixed;
    width: 100%;
    z-index: 1000; /* Adjust the z-index to ensure the navbar is above other elements */
}
#logo{
    font-size: 23px;
    color: rgb(66, 59, 59);
}
#logo img{
    margin-bottom: 15px;
}
.navbar-nav{
    margin-left: 10px;
}
.nav-link{
    color:  rgb(73, 73, 77) ;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    margin-left: 15px;
    transition: 0.5s ease;
}
.nav-link:hover{
    background-color: rgb(197, 198, 205) ;   
    color: white;
    border-radius: 5px;
}
.icons{
    margin-left: 30px;
}
.icons img{
    margin-left: 10px;
    transition: 0.5s ease;
    cursor: pointer;
}
.icons img:hover{
    transform: translateY(-5px);
}
@media screen and (max-width:330px){
    #logo{
        font-size: 15px;
    }
}
div .menu{
  background-color:#fff6ed ;
   
}
/* navbar end */
</style>