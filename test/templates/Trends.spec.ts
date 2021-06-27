import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import Vuetify from 'vuetify'
import Component from '~/components/templates/Trends.vue'
import { genTrend } from '~/stories/templates/Trends.stories'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Vuetify)

describe('Trends', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        trends: new Array(3).fill(null).map((_, i) => genTrend(i)),
      },
      localVue,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
