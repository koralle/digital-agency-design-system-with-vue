import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.ts'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.mts'
      },
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json'
      }
    }
  }
};

export default config;
