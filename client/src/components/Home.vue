<template>
  <v-container text-sm-center mt-2>
    <v-flex xs12>
      <!-- <v-carousel v-bind="{ cycle: true }" interval="3000">
        <v-carousel-item
          v-for="post in getPost"
          :key="post.title"
          :src="post.imageUrl"
        >
          <h1 id="carousel__heading">{{ post.title }}</h1>
        </v-carousel-item>
      </v-carousel> -->
    </v-flex>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "Home",
  data() {
    return {
      post: [],
    };
  },
  created() {
    this.handleGetCarouselPosts();
  },
  methods: {
    handleGetCarouselPosts() {
      this.$store.dispatch("getPost");
    },
  },
  // apollo: {
  //   getPost: {
  //     query: gql`
  //       query {
  //         getPost {
  //           title
  //           imageUrl
  //           description
  //         }
  //       }
  //     `,
  //     result({ data, loading }) {
  //       if (!loading) {
  //         this.post = data.getPost;
  //       }
  //     },
  //     error(err) {
  //       console.log("[ERROR]", err);
  //       console.dir(err);
  //     },
  //   },
  // },
};
</script>
<style scoped>
#carousel__heading {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
