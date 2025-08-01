import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

const vitestConfig = defineConfig({
  plugins: [vue()],
  test: {
    projects: [
      {
        plugins: [vue()],
        optimizeDeps: {
          include: ['vue']
        },
        test: {
          name: 'browser',
          include: ['src/**/*.browser.test.ts'],
          globals: true,
          browser: {
            provider: 'playwright',
            enabled: true,
            instances: [
              {
                browser: 'chromium',
                headless: true,
                viewport: {
                  width: 1920,
                  height: 1080
                }
              }
            ]
          }
        }
      },
      {
        test: {
          name: 'unittest',
          include: ['src/**/*.unit.test.ts'],
          globals: true
        }
      }
    ]
  }
});

export default vitestConfig;
