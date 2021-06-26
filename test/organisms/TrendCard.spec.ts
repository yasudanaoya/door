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
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
