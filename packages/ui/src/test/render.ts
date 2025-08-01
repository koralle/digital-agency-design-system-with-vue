import PrimeVue from 'primevue/config';
import { render as VIRender } from 'vitest-browser-vue';

const FIRST_PARAMETER = 0;
const SECOND_PARAMETER = 1;

export const render = (
  component: Parameters<typeof VIRender>[typeof FIRST_PARAMETER],
  options: Parameters<typeof VIRender>[typeof SECOND_PARAMETER] = {}
): ReturnType<typeof VIRender> =>
  VIRender(component, {
    global: {
      plugins: [PrimeVue],
      ...options.global
    },
    ...options
  });
