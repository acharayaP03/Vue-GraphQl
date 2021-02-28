<template>
  <div class="home">
    <h1>Home</h1>
    <ApolloQuery :query="getPostQuery">
      <template
        slot-scope="{ result: { loading, data, error, networkStatus } }"
      >
        <div v-if="loading">Loading.....</div>
        <div v-else-if="error">Error!!!! {{ error.message }}</div>
        <div v-else>
          <span>Network Status: {{ networkStatus }}</span>
          <ul>
            <li v-for="post in data.getPost" :key="post.title">
              {{ post.title }}- {{ post.imageUrl }}-{{ post.description }}
            </li>
          </ul>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "Home",
  data() {
    return {
      getPostQuery: gql`
        query {
          getPost {
            title
            imageUrl
            description
          }
        }
      `,
    };
  },
};
</script>
