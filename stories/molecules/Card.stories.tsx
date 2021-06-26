import { withKnobs } from '@storybook/addon-knobs'
import Card from '../../components/atoms/Card.vue'

export default {
  title: 'Atoms/Card',
  decorators: [withKnobs],
}

export const Basic = () => {
  return {
    components: { Card },
    props: {},
    template: `
      <Card />
    `,
  }
}
