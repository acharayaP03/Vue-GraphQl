import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {});

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3B125F",
        secondary: "#8B5FBF",
        accent: "#BF653F",
        error: "#722530",
        warning: "#A37513",
        info: "#396893",
      },
    },
  },
});

export default vuetify;
