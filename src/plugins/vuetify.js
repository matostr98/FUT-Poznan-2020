import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";


Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#830628",
        secondary: "#B40333",
        anchor: "#000000"
      }
    }
  },
  icons: {
    iconfont: "md"
  }
});

export default vuetify;
