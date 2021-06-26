import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import Vuetify from 'vuetify'
import Component from '~/components/organisms/AppHeader'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Vuetify)

describe('AppHeader', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      propsData: {},
      localVue,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
