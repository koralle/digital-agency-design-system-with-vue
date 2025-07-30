import PrimeVue from 'primevue/config';
import { render as VIRender } from 'vitest-browser-vue';

export const render = (
  component: Parameters<typeof VIRender>[0],
  options: Parameters<typeof VIRender>[1] = {}
): ReturnType<typeof VIRender> =>
  VIRender(component, {
    global: {
      plugins: [PrimeVue]
    },
    ...options
  });
