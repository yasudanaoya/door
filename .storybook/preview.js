import "vuetify/dist/vuetify.css";
import Vue from 'vue'
import Vuetify from "vuetify";
import VueCompositionAPI from '@vue/composition-api'


Vue.use(Vuetify)
Vue.use(VueCompositionAPI)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
