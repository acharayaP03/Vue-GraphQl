import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

// set up apolloclient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:5000/",
  connectToDevTools: true,
  //include auth token with requests made to backend
  fetchOptions: {
    crendentials: "include",
  },
  request: (operation) => {
    //check if token exists
    if (!localStorage.token) {
      localStorage.setItem({ token: "" });
    }
    // operation adds the token to an authorixation header, which is sent ot backend
    operation.setContext({
      headers: {
        authorizations: localStorage.getItem("token"),
      },
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError);
    }
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err);
      }
    }
  },
});
const apolloProvider = new VueApollo({ defaultClient });
Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
