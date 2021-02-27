<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="$apollo.loading">Loading.....</div>
    <ul v-else v-for="post in getPost" :key="post.title">
      <li>
        {{ post.title }}
        {{ post.imageUrl }}
        {{ post.description }}
      </li>
    </ul>
    <v-btn color="primary">Submit</v-btn>
  </div>
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
  apollo: {
    getPost: {
      query: gql`
        query {
          getPost {
            title
            imageUrl
            description
          }
        }
      `,
      result({ data, loading }) {
        if (!loading) {
          this.post = data.getPost;
        }
      },
    },
  },
};
</script>
