import type { Preview } from '@storybook/vue3-vite';
import './styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'fullscreen',
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    () => ({
      template: `
        <div class="grid place-items-center w-full h-full p-[2rem]">
          <story />
        </div>
      `
    })
  ]
};

export default preview;
