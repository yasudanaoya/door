import 'vuetify/dist/vuetify.css'
import { addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(Vuetify)
Vue.use(VueCompositionAPI)

addDecorator(() => ({
  vuetify: new Vuetify({
    preset: {
      icons: {
        iconfont: 'md',
      },
    },
  }),
  template: `
    <decorator>
      <v-app slot="story">
        <v-content>
          <story/>
        </v-content>
      </v-app>
    </decorator>
  `,
}))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
