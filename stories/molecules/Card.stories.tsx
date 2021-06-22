import { withKnobs } from '@storybook/addon-knobs'
import Card from '../../components/molecules/Card.vue'

export default {
  title: 'Molecules/Card',
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
