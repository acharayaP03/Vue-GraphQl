import Vue from "vue";
import Vuex from "vuex";
import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "../main";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    post: [],
  },
  mutations: {
    setPost: (state, payload) => {
      state.post = payload;
    },
  },
  actions: {
    getPost: ({ commit }) => {
      //use apolloClient to fire getPost query
      apolloClient
        .query({
          query: gql`
            query {
              getPost {
                title
                imageUrl
                description
              }
            }
          `,
        })
        .then(({ data }) => {
          //get data form actions to state via mutations
          //commit passes data from actions along to mutation functions
          commit("setPost", data.getPost);
          console.log(data.getPost);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  getters: {
    post: (state) => state.post,
  },
  modules: {},
});
