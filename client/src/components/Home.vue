<template>
  <div class="home">
    <h1>Home</h1>
    <ul v-for="post in getPost">
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
  apollo: {
    getPost: {
      query: gql`
        query {
          getPost {
            _id
            title
            imageUrl
            description
          }
        }
      `,
    },
  },
};
</script>
