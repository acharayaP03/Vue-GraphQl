import Vue from "vue";
import Vuex from "vuex";
import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "../main";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getPost: () => {
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
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  modules: {},
});
