<template>
        <!-- footer -->
        <footer id="footer"    data-aos="fade-up"
      data-aos-duration="1500">
        <h1 class="text-center">Bookly</h1>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusantium.</p>
        <div class="icons text-center">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-google"></i>
            <i class="bx bxl-skype"></i>
            <i class="bx bxl-instagram"></i>
        </div>
        <div class="copyright text-center">
            &copy; Copyright <strong>Bookly</strong> .All Rights Reserved
        </div>
        <div class="credite text-center">
            Designed By <a href="#"><span>RANIA & AMAL</span></a>
        </div>
      </footer>
      <!-- footer -->
</template>

<script>
export default {
    name: "FooterView",
}
</script>

<style>
/* footer */
#footer{
    width: 100%;    
    background-color: #080808;
    box-shadow: 0px 0px 5px black;
    margin-top: 100px;
}
#footer h1{
    color: white;
    padding-top: 30px;
}
#footer p{
    color: white;
}
.icons i{
    background-color: white;
    color: #573818;
    border-radius: 50px;
    padding: 6px;
    font-size: 30px;
    transition: 0.5s;
    cursor: pointer;
}
.icons i:hover{
    background-color: rgb(179, 137, 132);
    color: white;
}
.copyright{
    color: white;
    margin-top: 20px;
}
.credite{
    color: white;
}
/* footer */

</style>