import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import AppHeader from '../../components/organisms/AppHeader.vue'

export default {
  title: 'Organisms/AppHeader',
  decorators: [withKnobs],
  parameters: {
    layout: 'fullscreen',
  },
}

export const Basic = () => {
  return {
    components: { AppHeader },
    props: {},
    methods: {
      onClick: action('click'),
    },
    template: `
      <AppHeader @on-click="onClick" />
    `,
  }
}
