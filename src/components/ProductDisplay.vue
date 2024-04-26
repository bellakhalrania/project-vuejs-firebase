<template>
    <div>
      <MessageView @message-submitted="addReview"></MessageView>
      <MessageList v-if="reviews.length > 0" :reviews="reviews"></MessageList>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MessageView from "@/components/MessageView.vue";
  import MessageList from "@/components/MessageList.vue";

  
  export default {
    name: "ProductDisplay",
    props: {
      premium: {
        type: Boolean,
        required: true,
      },
    },
    components: {
      MessageView,
      MessageList,

    },
    data() {
      return {
        reviews: [],
      };
    },
    methods: {
      updateVariant(index) {
        this.selectedVariant = index;
        console.log(index);
      },
      addReview(review) {
        this.reviews.push(review);
        console.log(this.reviews);
      },
    },
  };
  </script>
  <style>

  </style>