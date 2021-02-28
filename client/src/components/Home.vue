<template>
  <v-container text-sm-center mt-2>
    <!-- spinner -->
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular
              indeterminate
              :size="70"
              :width="7"
              color="secondary"
            >
            </v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>
    <v-flex xs12>
      <v-carousel
        v-bind="{ cycle: true }"
        interval="3000"
        v-if="!loading && posts.length > 0"
      >
        <v-carousel-item
          v-for="post in posts"
          :key="post.title"
          :src="post.imageUrl"
        >
          <h1 id="carousel__heading">{{ post.title }}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["posts", "loading"]),
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
