import { object, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import PostTrendModal from '../../components/organisms/PostTrendModal.vue'

export default {
  title: 'Organisms/PostTrendModal',
  decorators: [withKnobs],
}

export const Basic = () => {
  return {
    components: { PostTrendModal },
    props: {
      options: {
        default: object('options', [
          { text: 'front', value: 'front' },
          { text: 'server', value: 'server' },
        ]),
      },
      ogp: {
        default: object('ogp', {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        }),
      },
    },
    methods: {
      onInputURL: action('input url'),
      onClickCancel: action('cancel'),
      onClickPost: action('post'),
    },
    template: `
      <PostTrendModal
        :options="options"
        @click-cancel="onClickCancel"
        @click-post="onClickPost"
        @input-url="onInputURL"
      />
    `,
  }
}
