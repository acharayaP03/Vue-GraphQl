import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      primary: colors.teal.base,
      secondary: colors.cyan.base,
      accent: colors.pink.base,
      error: colors.red.base,
      warning: colors.amber.base,
      info: colors.blue.base,
      success: colors.green.base,
    },
  },
});
