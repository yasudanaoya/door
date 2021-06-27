import { text, withKnobs } from '@storybook/addon-knobs'
import OgpCard from '../../components/molecules/OgpCard.vue'

export default {
  title: 'Molecules/OgpCard',
  decorators: [withKnobs],
}

export const Basic = () => {
  return {
    components: { OgpCard },
    props: {
      href: {
        default: text('href', 'https://github.com/'),
      },
      src: {
        default: text(
          'src',
          'https://github.githubassets.com/images/modules/open_graph/github-logo.png'
        ),
      },
      title: {
        default: text('title', 'GitHub'),
      },
      description: {
        default: text(
          'description',
          'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.'
        ),
      },
    },
    template: `
      <OgpCard :href="href" :src="src" :title="title" :description="description" />
    `,
  }
}
