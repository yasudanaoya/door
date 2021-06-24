import { object, text, withKnobs } from '@storybook/addon-knobs'
import TrendCard from '../../components/organisms/TrendCard.vue'

export default {
  title: 'Organisms/TrendCard',
  decorators: [withKnobs],
}

export const Basic = () => {
  return {
    components: { TrendCard },
    props: {
      tags: {
        default: object('tags', [
          { title: 'tag1', color: 'red', textColor: 'white' },
          { title: 'tag2', color: 'blue', textColor: 'white' },
        ]),
      },
      comment: {
        default: text('comment', 'comment'),
      },
    },
    template: `
      <TrendCard :tags="tags" :comment="comment" />
    `,
  }
}
