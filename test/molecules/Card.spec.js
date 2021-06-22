import { mount } from '@vue/test-utils'
import Component from '~/components/molecules/Card'

describe('Card', () => {
  test('snapshot', () => {
    const wrapper = mount(Component)
    expect(wrapper.element).toMatchSnapshot()
  })
})
