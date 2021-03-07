import Vue from "vue";
import Vuex from "vuex";
import { defaultClient as apolloClient } from "../main";
import { GET_POSTS, SIGNIN_USER } from "../queries";
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
          query: GET_POSTS,
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
    signinUser: ({ commit }, payload) => {
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload,
        })
        .then(({ data }) => {
          console.log(data.signinUser);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    posts: (state) => state.post,
    loading: (state) => state.loading,
  },
  modules: {},
});
