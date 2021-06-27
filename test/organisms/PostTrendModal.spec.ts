import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import Vuetify from 'vuetify'
import Component from '~/components/organisms/PostTrendModal.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Vuetify)

describe('PostTrendModal', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        options: [
          { text: 'front', value: 'front' },
          { text: 'server', value: 'server' },
        ],
        ogp: {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        },
      },
      localVue,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
