import Vue from "vue";
import Vuex from "vuex";
import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "../main";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    post: [],
    loading: false,
  },
  mutations: {
    setPost: (state, payload) => {
      state.post = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    },
  },
  actions: {
    getPost: ({ commit }) => {
      commit("setLoading", true);
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
          // console.log(data.getPost);
          commit("setLoading", false);
        })
        .catch((error) => {
          console.error(error);
          commit("setLoading", false);
        });
    },
  },
  getters: {
    posts: (state) => state.post,
    loading: (state) => state.loading,
  },
  modules: {},
});
