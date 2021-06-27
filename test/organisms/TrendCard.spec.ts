import { shallowMount } from '@vue/test-utils'
import Component from '~/components/organisms/TrendCard.vue'

describe('TrendCard', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        tags: [
          { title: 'tag1', color: 'red', textColor: 'white' },
          { title: 'tag2', color: 'blue', textColor: 'white' },
        ],
        comment: 'test',
        org: {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        },
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
