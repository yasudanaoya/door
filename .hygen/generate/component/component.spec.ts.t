---
to: test/<%= level %>/<%= h.changeCase.pascalCase(name) %>.spec.js
---
import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import Vuetify from 'vuetify'
import Component from '~/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Vuetify)

describe('<%= h.changeCase.pascal(name) %>', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      propsData: {},
      localVue,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
