import { mount } from '@vue/test-utils'
import Component from '~/components/atoms/Card.vue'

describe('Card', () => {
  test('snapshot', () => {
    const wrapper = mount(Component)
    expect(wrapper.element).toMatchSnapshot()
  })
})
