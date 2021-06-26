---
to: stories/<%= level %>/<%= h.changeCase.pascalCase(name) %>.stories.ts
---
import { withKnobs } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import <%= h.changeCase.pascalCase(name) %> from "../../components/<%= level %>/<%= h.changeCase.pascalCase(name) %>.vue"

export default {
  title: "<%= h.changeCase.pascalCase(level) %>/<%= h.changeCase.pascalCase(name) %>",
  decorators: [withKnobs]<% if (level === 'templates') { -%>,
    parameters: {
      layout: 'fullscreen'
    }
  <% } -%>
}

export const Basic = () => {
  return {
    components: { <%= h.changeCase.pascalCase(name) %> },
    props: {},
    template: `
      <<%= h.changeCase.pascalCase(name) %> />
    `
  }
}
