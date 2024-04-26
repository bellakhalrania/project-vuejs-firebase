<template>
  
   <ProductDisplay></ProductDisplay>
   <FooterView></FooterView>
  
</template>

<script>
import ProductDisplay from "@/components/ProductDisplay.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "MessageView",
  components: {
    FooterView,
    ProductDisplay,
},
}
</script>
